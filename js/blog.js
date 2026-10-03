document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("blog-submit-form");
    const postsContainer = document.getElementById("blog-post-list");
    if (!form && !postsContainer) {
        return;
    }

    const submitButton = document.getElementById("blog-submit-button");
    const submitStatus = document.getElementById("blog-submit-status");
    const postsStatus = document.getElementById("blog-posts-status");
    const config = window.RANGRADART_SUPABASE_CONFIG;
    let loadedPosts = null;
    let postsMessageKey = "loadingPosts";
    let submitMessageKey = null;

    function translate(key) {
        return window.RANGRADART_I18N ? window.RANGRADART_I18N.t(key) : key;
    }

    function setPostsMessage(key) {
        postsMessageKey = key;
        if (postsStatus) {
            postsStatus.textContent = key ? translate(key) : "";
        }
    }

    function setSubmitMessage(key) {
        submitMessageKey = key;
        if (submitStatus) {
            submitStatus.textContent = key ? translate(key) : "";
        }
    }

    document.addEventListener("rangradart:languagechange", function () {
        if (loadedPosts !== null) {
            renderPosts(loadedPosts);
        } else {
            setPostsMessage(postsMessageKey);
        }
        if (submitMessageKey) {
            setSubmitMessage(submitMessageKey);
        }
        if (submitButton) {
            submitButton.textContent = translate(submitButton.disabled ? "publishing" : "publishButton");
        }
    });

    if (!config || !config.url || !config.anonKey || !window.supabase) {
        if (submitButton) {
            submitButton.disabled = true;
        }
        if (submitStatus) {
            setSubmitMessage("serviceUnconfigured");
        }
        if (postsStatus) {
            setPostsMessage("serviceUnavailable");
        }
        return;
    }

    let client;
    try {
        client = window.supabase.createClient(config.url, config.anonKey);
    } catch (error) {
        console.error("Supabase yapılandırması geçersiz:", error);
        if (submitButton) {
            submitButton.disabled = true;
        }
        if (submitStatus) {
            setSubmitMessage("connectionFailed");
        }
        if (postsStatus) {
            setPostsMessage("serviceUnavailable");
        }
        return;
    }

    function getServiceErrorMessage(error) {
        const message = error && typeof error.message === "string" ? error.message : "";
        if (
            (error && (error.code === "PGRST202" || error.code === "PGRST205"))
            || /could not find the (table|function).*schema cache/i.test(message)
        ) {
            return "serviceNotReady";
        }

        return "requestFailed";
    }

    function renderPosts(posts) {
        postsContainer.replaceChildren();

        if (posts.length === 0) {
            loadedPosts = posts;
            setPostsMessage("noPosts");
            return;
        }

        loadedPosts = posts;
        setPostsMessage("");
        posts.forEach(function (post) {
            const article = document.createElement("article");
            article.className = "blog-post";

            const title = document.createElement("h3");
            title.className = "h4";
            title.textContent = post.title || translate("shortPost");

            const byline = document.createElement("p");
            byline.className = "text-muted";
            const locale = window.RANGRADART_I18N ? translate("locale") : "tr-TR";
            byline.textContent = post.author_name + " · " + new Date(post.created_at).toLocaleString(locale, {
                dateStyle: "long",
                timeStyle: "short"
            });

            const content = document.createElement("p");
            content.className = "blog-post-content mb-0";
            content.textContent = post.content;

            article.append(title, byline, content);
            postsContainer.append(article);
        });
    }

    async function loadPosts() {
        const { data, error } = await client
            .from("blog_posts")
            .select("id, author_name, title, content, created_at")
            .order("created_at", { ascending: false })
            .limit(100);

        if (error) {
            throw error;
        }
        if (!Array.isArray(data)) {
            throw new Error("Blog gönderileri beklenen biçimde alınamadı.");
        }

        renderPosts(data);
    }

    if (postsContainer) {
        loadPosts().catch(function (error) {
            console.error("Blog yazıları yüklenemedi:", error);
            setPostsMessage(getServiceErrorMessage(error));
        });
    }

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            if (formData.get("website")) {
                setSubmitMessage("postRejected");
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = translate("publishing");
            setSubmitMessage("sending");

            try {
                const { error } = await client.rpc("submit_blog_post", {
                    p_author_name: formData.get("author_name").trim(),
                    p_email: formData.get("email").trim(),
                    p_title: formData.get("title").trim(),
                    p_content: formData.get("content").trim()
                });

                if (error) {
                    throw error;
                }

                form.reset();
                setSubmitMessage("published");
                try {
                    await loadPosts();
                } catch (error) {
                    console.error("Gönderi yayımlandı ancak liste yenilenemedi:", error);
                    setSubmitMessage("publishedRefreshFailed");
                    setPostsMessage("postsRefreshFailed");
                }
            } catch (error) {
                console.error("Blog yazısı gönderilemedi:", error);
                submitStatus.textContent = getServiceErrorMessage(error);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = translate("publishButton");
            }
        });
    }
});
