(function () {
    const translations = {
        tr: {
            titleHome: "rangradArt | Ana Sayfa",
            titleBlog: "Blog | rangradArt",
            titleShop: "Alışveriş | rangradArt",
            descriptionHome: "rangradArt blog ve yazı paylaşım alanı",
            descriptionBlog: "rangradArt'ta üye olmadan yazı paylaşın.",
            descriptionShop: "rangradArt mağazasını keşfedin.",
            brandHome: "rangradArt ana sayfa",
            languageSelect: "Dil seçimi",
            mainMenu: "Ana menü",
            navBlog: "Blog",
            navShop: "Alışveriş",
            homeEyebrow: "FİKİRLERİN BULUŞTUĞU YER",
            homeTitleLead: "Her hikâyenin bir",
            homeTitleAccent: "yeri",
            homeTitleEnd: "var.",
            homeIntro: "rangradArt; fikirlerini, deneyimlerini ve hikâyelerini paylaşabileceğin samimi bir yazı alanı. Oku, ilham al ve kendi sözünü ekle.",
            shareWriting: "Yazını paylaş",
            discoverPosts: "Yazıları keşfet",
            welcomeEyebrow: "RANGRADART'A HOŞ GELDİN",
            aboutTitle: "Bir fikirle başlar.",
            aboutText: "Burada kısa notlardan uzun blog yazılarına kadar aklından geçenleri paylaşabilirsin. Okurların yazılarını keşfeder; her yeni hikâye bu topluluğu biraz daha büyütür.",
            communityPosts: "Topluluk yazılarını gör",
            postsTitle: "Topluluktan yazılar",
            loadingPosts: "Yazılar yükleniyor…",
            shareTitle: "Yazını paylaş",
            shareDescription: "Üye olmadan, yalnızca adını ve e-posta adresini bırakarak blog yazısı ya da kısa bir yazı yayımlayabilirsin. Gönderiler hemen yayımlanır; e-posta adresin herkese gösterilmez.",
            authorName: "Adın",
            authorEmail: "E-posta adresin",
            postTitle: "Başlık",
            optionalForNote: "(kısa yazı için isteğe bağlı)",
            postContent: "Yazın",
            leaveBlank: "Bu alanı boş bırakın",
            publish: "Yayımla",
            shopComingSoon: "Mağaza hazırlanıyor",
            shopDescription: "Ürünler ve alışveriş seçenekleri burada yakında yer alacak.",
            copyright: "© 2026 Tüm hakları saklıdır.",
            serviceUnconfigured: "Supabase bağlantısı yapılandırılmamış. js/supabase-config.js dosyasındaki proje URL'sini ve publishable/anon anahtarını kontrol edin.",
            serviceUnavailable: "Yazılar yüklenemedi. Supabase bağlantı ayarlarını kontrol edin.",
            connectionFailed: "Supabase'e bağlanılamadı. Proje URL'sini ve publishable/anon anahtarını kontrol edin.",
            serviceNotReady: "Supabase veritabanı henüz hazırlanmadı. Supabase SQL Editor'da supabase/schema.sql dosyasını çalıştırın.",
            requestFailed: "İstek tamamlanamadı. Bağlantıyı ve Supabase ayarlarını kontrol edip tekrar deneyin.",
            noPosts: "Henüz yazı paylaşılmamış. İlk yazıyı sen paylaş!",
            shortPost: "Kısa yazı",
            postRejected: "Gönderi doğrulanamadı.",
            publishing: "Yayımlanıyor…",
            sending: "Yazın gönderiliyor…",
            published: "Yazın yayımlandı.",
            publishedRefreshFailed: "Yazın yayımlandı; ancak liste yenilenemedi. Sayfayı yenileyebilirsin.",
            postsRefreshFailed: "Yazılar yenilenemedi. Lütfen sayfayı yenileyin.",
            publishButton: "Yayımla",
            locale: "tr-TR"
        },
        en: {
            titleHome: "rangradArt | Home",
            titleBlog: "Blog | rangradArt",
            titleShop: "Shop | rangradArt",
            descriptionHome: "rangradArt blog and writing community",
            descriptionBlog: "Share a post on rangradArt without creating an account.",
            descriptionShop: "Discover the rangradArt shop.",
            brandHome: "rangradArt home",
            languageSelect: "Language selection",
            mainMenu: "Main menu",
            navBlog: "Blog",
            navShop: "Shop",
            homeEyebrow: "WHERE IDEAS COME TOGETHER",
            homeTitleLead: "Every story has a",
            homeTitleAccent: "place",
            homeTitleEnd: ".",
            homeIntro: "rangradArt is a welcoming space to share your ideas, experiences, and stories. Read, find inspiration, and add your own voice.",
            shareWriting: "Share your post",
            discoverPosts: "Explore posts",
            welcomeEyebrow: "WELCOME TO RANGRADART",
            aboutTitle: "It starts with an idea.",
            aboutText: "Share anything from a quick note to a longer blog post. Readers can discover your writing, and every new story helps this community grow.",
            communityPosts: "See community posts",
            postsTitle: "Community posts",
            loadingPosts: "Loading posts…",
            shareTitle: "Share your post",
            shareDescription: "Publish a blog post or a short note without creating an account. Only your name and email are required. Posts are published immediately; your email address is never shown publicly.",
            authorName: "Your name",
            authorEmail: "Your email address",
            postTitle: "Title",
            optionalForNote: "(optional for a short note)",
            postContent: "Your post",
            leaveBlank: "Leave this field empty",
            publish: "Publish",
            shopComingSoon: "Shop coming soon",
            shopDescription: "Products and shopping options will be available here soon.",
            copyright: "© 2026 All rights reserved.",
            serviceUnconfigured: "Supabase is not configured. Check the project URL and publishable/anon key in js/supabase-config.js.",
            serviceUnavailable: "Posts could not be loaded. Check the Supabase connection settings.",
            connectionFailed: "Could not connect to Supabase. Check the project URL and publishable/anon key.",
            serviceNotReady: "The Supabase database is not set up yet. Run supabase/schema.sql in the Supabase SQL Editor.",
            requestFailed: "The request failed. Check your connection and Supabase settings, then try again.",
            noPosts: "No posts yet. Be the first to share one!",
            shortPost: "Short post",
            postRejected: "The post could not be verified.",
            publishing: "Publishing…",
            sending: "Submitting your post…",
            published: "Your post has been published.",
            publishedRefreshFailed: "Your post was published, but the list could not refresh. Reload the page.",
            postsRefreshFailed: "The posts could not refresh. Please reload the page.",
            publishButton: "Publish",
            locale: "en-US"
        }
    };

    let language = "tr";
    try {
        const savedLanguage = window.localStorage.getItem("rangradart-language");
        if (savedLanguage === "en" || savedLanguage === "tr") {
            language = savedLanguage;
        }
    } catch (error) {
        console.warn("Dil tercihi okunamadı:", error);
    }

    function translate(key) {
        return translations[language][key] || translations.tr[key] || key;
    }

    function applyLanguage(nextLanguage) {
        language = nextLanguage === "en" ? "en" : "tr";
        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = translate(element.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-content]").forEach(function (element) {
            element.setAttribute("content", translate(element.dataset.i18nContent));
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-language]").forEach(function (button) {
            button.setAttribute("aria-pressed", String(button.dataset.language === language));
        });

        try {
            window.localStorage.setItem("rangradart-language", language);
        } catch (error) {
            console.warn("Dil tercihi kaydedilemedi:", error);
        }

        document.dispatchEvent(new CustomEvent("rangradart:languagechange", {
            detail: { language: language }
        }));
    }

    document.querySelectorAll("[data-language]").forEach(function (button) {
        button.addEventListener("click", function () {
            applyLanguage(button.dataset.language);
        });
    });

    window.RANGRADART_I18N = {
        get language() {
            return language;
        },
        t: translate
    };

    applyLanguage(language);
})();
