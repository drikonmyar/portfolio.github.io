const messageSound = document.getElementById("messageSound");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

const preloader = document.getElementById("preloader");
const siteHeader = document.querySelector(".site-header");

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const viewerCountNode = document.getElementById("viewerCount");

const openChatBtn = document.getElementById("openChatBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatPopup = document.getElementById("chatPopup");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

let additionalText = "";
let greeted = false;

function setYear() {
    const yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }
}

async function setViewerCount() {
    if (!viewerCountNode) return;

    viewerCountNode.textContent = "Loading...";

    const setCountText = (value) => {
        viewerCountNode.textContent = Number(value).toLocaleString("en-US");
    };

    const getLocalFallbackCount = () => {
        const storageKey = "page_view";
        let visitCount = Number(localStorage.getItem(storageKey));
        if (!Number.isFinite(visitCount) || visitCount <= 0) {
            visitCount = 994;
        } else {
            visitCount += 1;
        }
        localStorage.setItem(storageKey, String(visitCount));
        return visitCount;
    };

    try {
        const [{ initializeApp, getApp, getApps }, { getFirestore, doc, getDoc, setDoc, updateDoc }, { getAuth, signInAnonymously }] =
            await Promise.all([
                import("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"),
                import("https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"),
                import("https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js")
            ]);

        const firebaseConfig = {
            apiKey: "AIzaSyA9aOE5gjdurLGqR9JZzwzFMpn5v15m25Y",
            authDomain: "portfolio-nabyendu.firebaseapp.com",
            projectId: "portfolio-nabyendu",
            storageBucket: "portfolio-nabyendu.firebasestorage.app",
            messagingSenderId: "540684889169",
            appId: "1:540684889169:web:7851fe6c53937351165c70",
            measurementId: "G-61JNBKQP18"
        };

        const appName = "viewer-counter-app";
        const app = getApps().some((existingApp) => existingApp.name === appName)
            ? getApp(appName)
            : initializeApp(firebaseConfig, appName);
        const db = getFirestore(app);
        const auth = getAuth(app);

        await signInAnonymously(auth);

        const docRef = doc(db, "websiteStats", "visitCount");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const current = Number(docSnap.data().count) || 0;
            const next = current + 1;
            await updateDoc(docRef, { count: next });
            setCountText(next);
        } else {
            await setDoc(docRef, { count: 1 });
            setCountText(1);
        }
    } catch (error) {
        console.warn("Firebase counter unavailable, using local fallback counter.", error);
        try {
            setCountText(getLocalFallbackCount());
        } catch (fallbackError) {
            console.error("Could not set viewer count.", fallbackError);
            viewerCountNode.textContent = "1";
        }
    }
}

function hidePreloader() {
    if (!preloader) return;
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 650);
}

function toggleHeaderShadow() {
    const scrolled = window.scrollY > 8;
    if (siteHeader) {
        siteHeader.classList.toggle("is-scrolled", scrolled);
    }
}

function closeNavMenu() {
    if (!siteNav || !navToggle) return;
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
    if (!siteNav || !navToggle) return;

    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeNavMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
            closeNavMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) {
            closeNavMenu();
        }
    });
}

function setupActiveNavHighlight() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    const isActive = link.getAttribute("href") === `#${id}`;
                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            root: null,
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0.01
        }
    );

    sections.forEach((section) => observer.observe(section));
}

function setupContactForm() {
    if (!contactForm || !formStatus) return;

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const submitLabel = submitButton?.querySelector("span");
    const defaultLabel = submitLabel?.textContent || "Send Message";
    const endpoint = "https://formsubmit.co/ajax/nabyenduojha99@gmail.com";

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("form-name")?.value.trim() || "";
        const email = document.getElementById("form-email")?.value.trim() || "";
        const subject = document.getElementById("form-subject")?.value.trim() || "Portfolio enquiry";
        const message = document.getElementById("form-message")?.value.trim() || "";

        if (!name || !email || !message) {
            formStatus.textContent = "Please complete all fields before sending.";
            errorSound?.play().catch(() => { });
            return;
        }

        submitButton?.setAttribute("disabled", "true");
        if (submitLabel) submitLabel.textContent = "Sending...";
        formStatus.textContent = "Sending message...";

        const payload = {
            name,
            email,
            subject,
            message,
            _captcha: "false"
        };

        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 15000);

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            const result = await response.json().catch(() => ({}));
            const success = result.success === "true" || result.success === true;

            if (!response.ok || !success) {
                throw new Error(result.message || "Message could not be sent.");
            }

            formStatus.textContent = "Message sent successfully. I will get back to you soon.";
            successSound?.play().catch(() => { });
            contactForm.reset();
        } catch (error) {
            console.error("Contact form submission failed:", error);
            formStatus.textContent = "Could not send message right now. Please try again shortly.";
            errorSound?.play().catch(() => { });
        } finally {
            clearTimeout(timeout);
            submitButton?.removeAttribute("disabled");
            if (submitLabel) submitLabel.textContent = defaultLabel;
        }
    });
}

async function loadAdditionalText() {
    try {
        const response = await fetch("ai-instruction.txt");
        additionalText = await response.text();
    } catch (error) {
        additionalText = "";
        console.error("Could not load profile context:", error);
    }
}

function appendMessage(text, type) {
    if (!chatMessages) return;

    const node = document.createElement("div");
    node.classList.add("message", type === "user" ? "user-message" : "bot-message");
    node.textContent = text;
    chatMessages.appendChild(node);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function inferBotResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("resume") || q.includes("cv")) {
        return "You can download the resume from the hero section or use this link: https://nojha.in/pdfs/Resume_NabyenduOjha.pdf";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
        return "You can reach Nabyendu at nabyenduojha99@gmail.com or via the contact form.";
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
        return "Core stack: Java, Spring Boot, SQL, Kafka, Docker, Kubernetes, Jenkins, AWS, and testing with JUnit.";
    }

    if (q.includes("experience") || q.includes("infosys") || q.includes("work")) {
        return "Nabyendu is a Software Engineer at Infosys with 3+ years of backend development experience.";
    }

    if (q.includes("achievement") || q.includes("rank") || q.includes("leetcode")) {
        return "Highlights include AIR 143 in CodeKaze 2024, AIR 299 in CodeKaze 2023, and 700+ solved LeetCode problems.";
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return "Hi. Ask me about skills, experience, projects, certifications, or contact details.";
    }

    if (q.includes("project")) {
        return "The projects section contains curated archives across web, Java, Python, cloud, Android, and more.";
    }

    if (additionalText && additionalText.toLowerCase().includes("profession")) {
        return "I can help with concise profile details. Ask specific questions like 'skills', 'experience', 'resume', or 'achievements'.";
    }

    return "I can answer quick profile questions. Try: skills, experience, resume, achievements, or contact.";
}

function openChatWindow() {
    if (!chatPopup) return;

    chatPopup.classList.add("open");
    userInput?.focus();

    if (!greeted) {
        greeted = true;
        appendMessage("Hello. I can answer profile questions about Nabyendu. What would you like to know?", "bot");
        messageSound?.play().catch(() => { });
    }
}

function setupChat() {
    if (!openChatBtn || !chatPopup || !sendMessageBtn || !userInput || !chatMessages || !closeChatBtn) return;

    openChatBtn.addEventListener("click", openChatWindow);

    closeChatBtn.addEventListener("click", () => {
        chatPopup.classList.remove("open");
    });

    sendMessageBtn.addEventListener("click", async () => {
        await sendChatMessage();
    });

    userInput.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            await sendChatMessage();
        }
    });
}

async function sendChatMessage() {
    const text = userInput?.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    userInput.value = "";

    const typing = document.createElement("div");
    typing.classList.add("message", "bot-message", "typing-indicator");
    typing.textContent = "Typing...";
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    await new Promise((resolve) => setTimeout(resolve, 420));

    const response = inferBotResponse(text);
    typing.classList.remove("typing-indicator");
    typing.textContent = response;
    messageSound?.play().catch(() => { });
}

window.addEventListener("load", () => {
    setYear();
    setViewerCount();
    hidePreloader();
    toggleHeaderShadow();
    loadAdditionalText();
});

window.addEventListener("scroll", toggleHeaderShadow);

setupNavigation();
setupActiveNavHighlight();
setupContactForm();
setupChat();
