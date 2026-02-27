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
// const viewerCountNode = document.getElementById("viewerCount"); // Viewer counter disabled

const openChatBtn = document.getElementById("openChatBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatPopup = document.getElementById("chatPopup");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

const GROQ_MODEL = "llama-3.1-8b-instant";
const CHAT_API_ENDPOINT = "https://secret-from-api.vercel.app/api/chat";
const MAX_CHAT_HISTORY_MESSAGES = 12;
const CHAT_API_TIMEOUT_MS = 12000;

let greeted = false;
let lastDetectedIntent = "";
const chatHistory = [];

const lastReplyIndexByIntent = Object.create(null);

const PROFILE_KB = {
    name: "Nabyendu Ojha",
    website: "https://nojha.in",
    headline: "Software Engineer • Backend Developer",
    summary: "Backend engineer focused on Java, Spring Boot, clean architecture, and reliable delivery.",
    totalExperience: "4+ years",
    currentRole: "Assistant Manager at Deloitte (May 2025 - Present)",
    location: "Kolkata, India",
    contactEmail: "nabyenduojha99@gmail.com",
    resumeLink: "https://nojha.in/pdfs/Resume_NabyenduOjha.pdf",
    skills: [
        "Java", "Spring Boot", "Maven", "PostgreSQL", "MySQL", "MongoDB", "Python", "C++",
        "HTML", "CSS", "JavaScript", "React", "GraphQL", "Kafka", "Docker", "Kubernetes",
        "Jenkins", "Git", "AWS", "Jira", "SonarQube", "Swagger", "Rancher", "Elastic Logs",
        "Hibernate", "JUnit", "XL Deploy"
    ],
    interests: ["Chess", "Geopolitics", "Historical Epics", "Swimming", "Badminton"],
    education: [
        {
            institute: "Jalpaiguri Govt. Engg. College",
            degree: "B.Tech in Civil Engineering",
            meta: "2021 • CGPA 8.38"
        },
        {
            institute: "Mohiary Kundu Chowdhury Institution",
            degree: "Higher Secondary (10+2)",
            meta: "2017 • 86.20%"
        },
        {
            institute: "Ramakrishna Mission Vidyabhavan",
            degree: "Secondary (10th)",
            meta: "2015 • 89.71%"
        }
    ],
    professionalPath: [
        { role: "Systems Engineer Trainee", company: "Infosys", duration: "Dec 2021 - Feb 2022" },
        { role: "Systems Engineer", company: "Infosys", duration: "Feb 2022 - Jan 2024" },
        { role: "Senior Systems Engineer", company: "Infosys", duration: "Jan 2024 - May 2025" },
        { role: "Assistant Manager", company: "Deloitte", duration: "May 2025 - Present" }
    ],
    deliverables: [
        "Built REST APIs with CRUD, file upload, dashboard retrieval, bulk updates, and record expiry.",
        "Scheduled Spring Batch jobs for periodic database refresh and dependable background processing.",
        "Maintained 80%+ test coverage using JUnit and Mockito for stable releases.",
        "Resolved SonarQube blocker, critical, major, and minor issues for quality governance.",
        "Built CI/CD pipelines with Jenkins and deployed across environments using XL Deploy.",
        "Integrated complex SQL query logic directly into application workflows.",
        "Implemented Spring Security with JWT, OAuth2, and role-based access control.",
        "Created Swagger docs and Javadocs for clear API contracts and faster onboarding."
    ],
    infosysHighlights: [
        "Developed REST APIs for file upload, dashboard visibility, unitary and bulk updates, and expiry workflows.",
        "Built microservices through Jenkins pipelines with single and multi-parameter execution.",
        "Built Spring Batch jobs for 2-minute interval database updates.",
        "Integrated external APIs using @FeignClient and maintained API docs with Swagger/Javadocs."
    ],
    deloitteHighlights: [
        "Working in agile delivery with sprint planning, stand-ups, and retrospectives.",
        "Contributing to integration and process automation for identity management systems.",
        "Implemented SMTP alerts and notification emails for create/update events.",
        "Collaborating with cross-functional teams to improve backend workflow efficiency and compliance."
    ],
    achievements: [
        { rank: "3rd Position", title: "Deloitte Innovation Shark Tank", meta: "2025" },
        { rank: "AIR 143", title: "CodeKaze", meta: "2024" },
        { rank: "1st Rank", title: "Infosys Code Jam", meta: "2023" },
        { rank: "Global Rank 2617", title: "TCS CodeVita", meta: "2022" },
        { rank: "Finalist", title: "Infosys Makeathon Edition 14", meta: "Innovation" },
        { rank: "AIR 299", title: "CodeKaze", meta: "2023" },
        { rank: "5-Star Rating", title: "HackerRank", meta: "Problem Solving" },
        { rank: "Certified Software Engineer", title: "HackerRank", meta: "Certification" },
        { rank: "900+ Problems Solved", title: "LeetCode", meta: "DSA" },
        { rank: "60+ Projects Completed", title: "GitHub", meta: "Portfolio Work" }
    ],
    projectArchives: [
        "Civil Projects", "Civil - CAD 3D", "BCCI - CAD 3D", "JGEC - CAD 3D", "Burj Khalifa - CAD 3D",
        "SAP Projects", "Python Projects", "Web Projects", "Java Projects", "IoT Projects",
        "Android Projects", "Data Science Projects", "Cloud Projects", "C++ Projects",
        "Presentations", "Pencil Sketches"
    ],
    certificationsPrimary: [
        { name: "Rest API", provider: "HackerRank", period: "Jan 2025" },
        { name: "Problem Solving", provider: "HackerRank", period: "Oct 2024" },
        { name: "Java", provider: "HackerRank", period: "Sep 2024" },
        { name: "Spring Boot", provider: "Coding Ninjas", period: "Oct 2023 - Feb 2024" },
        { name: "Front End | Full Stack Web Development", provider: "Coding Ninjas", period: "Aug 2023 - Oct 2023" },
        { name: "Full Stack: Spring Boot + Angular", provider: "Udemy", period: "Feb 2023 - May 2023" },
        { name: "Data Structures", provider: "Coding Ninjas", period: "Jun 2022 - Oct 2022" },
        { name: "Java Fundamentals", provider: "Coding Ninjas", period: "May 2022 - Jun 2022" },
        { name: "Google IT Support", provider: "Coursera", period: "Aug 2021 - Feb 2022" },
        { name: "Python Programming", provider: "Internshala", period: "Apr 2020 - May 2020" },
        { name: "Structural Engg + Python", provider: "IIT Kharagpur", period: "Jun 2019" },
        { name: "Advance Excel", provider: "Internshala", period: "Jun 2018 - Jul 2018" }
    ],
    certificationsArchive: [
        "HyperWorks (CAE)",
        "RCC: Basics & Advanced",
        "STAAD.Pro",
        "AutoCAD 3D",
        "Building Analysis",
        "AutoCAD 2D"
    ]
};

let knowledgeIndexCache = [];

const CHAT_TOKEN_ALIASES = {
    technologies: "tech",
    technology: "tech",
    technical: "tech",
    stack: "skills",
    stacks: "skills",
    skillset: "skills",
    tools: "skills",
    framework: "skills",
    frameworks: "skills",
    worked: "experience",
    working: "experience",
    career: "experience",
    job: "experience",
    jobs: "experience",
    professional: "experience",
    achievements: "achievement",
    awards: "achievement",
    award: "achievement",
    ranks: "achievement",
    ranking: "achievement",
    certificates: "certification",
    certs: "certification",
    courses: "certification",
    course: "certification",
    internships: "certification",
    internship: "certification",
    interested: "interest",
    inetersted: "interest",
    intersted: "interest",
    hobbies: "interest",
    hobby: "interest",
    projects: "project",
    website: "website",
    site: "website",
    domain: "website",
    url: "website",
    trainings: "training",
    where: "location",
    based: "location",
    city: "location"
};

const CHAT_INTENT_RULES = {
    resume: {
        keywords: ["resume", "cv", "profile", "download"],
        phrases: ["download resume", "share resume", "resume link", "cv link"]
    },
    contact: {
        keywords: ["contact", "email", "reach", "connect", "message", "mail"],
        phrases: ["how to contact", "reach out", "get in touch"]
    },
    skills: {
        keywords: ["skill", "skills", "tech", "skills", "tools", "framework", "stack"],
        phrases: ["tech stack", "technical stack", "what do you use"]
    },
    experience: {
        keywords: ["experience", "work", "infosys", "deloitte", "role", "position", "years"],
        phrases: ["work experience", "professional experience", "current role", "where working"]
    },
    achievements: {
        keywords: ["achievement", "rank", "leetcode", "hackerrank", "codekaze", "award", "finalist"],
        phrases: ["key achievements", "top achievements", "competitive programming"]
    },
    projects: {
        keywords: ["project", "archive", "github", "portfolio", "work"],
        phrases: ["selected work", "project archive", "project links"]
    },
    website: {
        keywords: ["website", "site", "domain", "url", "link", "portfolio"],
        phrases: ["official site", "official website", "your website", "site name", "website name", "portfolio link"]
    },
    certifications: {
        keywords: ["certification", "certificate", "training", "internship", "course", "udemy", "coursera", "hackerrank"],
        phrases: ["certification details", "show certificates", "training section"]
    },
    education: {
        keywords: ["education", "college", "school", "degree", "btech", "academic"],
        phrases: ["education background", "academic background"]
    },
    interests: {
        keywords: ["interest", "interested", "hobby", "outside", "personal", "chess", "swimming", "geopolitics"],
        phrases: ["outside engineering", "free time", "personal interests", "interested in"]
    },
    location: {
        keywords: ["location", "city", "india", "kolkata", "based"],
        phrases: ["where based", "current location"]
    },
    greeting: {
        keywords: ["hello", "hi", "hey", "yo", "namaste"],
        phrases: ["good morning", "good evening", "good afternoon"]
    },
    thanks: {
        keywords: ["thanks", "thank", "thx", "appreciate"],
        phrases: ["thank you"]
    }
};

function setYear() {
    const yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }
}

/*
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
*/

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

function collectPrimaryCertifications(limit = 20) {
    return PROFILE_KB.certificationsPrimary
        .slice(0, limit)
        .map((item) => `${item.name} (${item.provider} • ${item.period})`);
}

function collectPrimaryCertificationNames(limit = 20) {
    return PROFILE_KB.certificationsPrimary
        .slice(0, limit)
        .map((item) => item.name);
}

function collectArchiveCertifications(limit = 20) {
    return PROFILE_KB.certificationsArchive.slice(0, limit);
}

function getEducationSummary(limit = 3) {
    return PROFILE_KB.education
        .slice(0, limit)
        .map((item) => {
            const summary = `${item.institute} - ${item.degree}`;
            return item.meta ? `${summary} (${item.meta})` : summary;
        });
}

function getContactEmail() {
    return PROFILE_KB.contactEmail;
}

function getResumeLink() {
    return PROFILE_KB.resumeLink;
}

function getCurrentRoleSummary() {
    return PROFILE_KB.currentRole;
}

function buildKnowledgeIndex() {
    const lines = [
        `Name: ${PROFILE_KB.name}`,
        `Website: ${PROFILE_KB.website}`,
        `Headline: ${PROFILE_KB.headline}`,
        `Summary: ${PROFILE_KB.summary}`,
        `Total experience: ${PROFILE_KB.totalExperience}`,
        `Current role: ${PROFILE_KB.currentRole}`,
        `Location: ${PROFILE_KB.location}`,
        `Contact email: ${PROFILE_KB.contactEmail}`,
        `Resume: ${PROFILE_KB.resumeLink}`,
        `Project archives count: ${PROFILE_KB.projectArchives.length}`,
        `Primary certifications count: ${PROFILE_KB.certificationsPrimary.length}`,
        `Archive certifications count: ${PROFILE_KB.certificationsArchive.length}`
    ];

    PROFILE_KB.professionalPath.forEach((step) => {
        lines.push(`Role: ${step.role} at ${step.company} (${step.duration})`);
    });

    PROFILE_KB.deliverables.forEach((item) => {
        lines.push(`Delivery: ${item}`);
    });

    PROFILE_KB.infosysHighlights.forEach((item) => {
        lines.push(`Infosys: ${item}`);
    });

    PROFILE_KB.deloitteHighlights.forEach((item) => {
        lines.push(`Deloitte: ${item}`);
    });

    PROFILE_KB.achievements.forEach((item) => {
        lines.push(`Achievement: ${item.rank} | ${item.title} | ${item.meta}`);
    });

    PROFILE_KB.projectArchives.forEach((item) => {
        lines.push(`Project archive: ${item}`);
    });

    PROFILE_KB.certificationsPrimary.forEach((item) => {
        lines.push(`Certification: ${item.name} | ${item.provider} | ${item.period}`);
    });

    PROFILE_KB.certificationsArchive.forEach((item) => {
        lines.push(`Archive certification: ${item}`);
    });

    PROFILE_KB.skills.forEach((item) => {
        lines.push(`Skill: ${item}`);
    });

    PROFILE_KB.interests.forEach((item) => {
        lines.push(`Interest: ${item}`);
    });

    getEducationSummary(6).forEach((item) => {
        lines.push(`Education: ${item}`);
    });

    return lines;
}

function getKnowledgeCorpus() {
    if (!knowledgeIndexCache.length) {
        knowledgeIndexCache = buildKnowledgeIndex();
    }
    return knowledgeIndexCache.join("\n");
}

function appendMessage(text, type) {
    if (!chatMessages) return;

    const node = document.createElement("div");
    node.classList.add("message", type === "user" ? "user-message" : "bot-message");
    node.textContent = text;
    chatMessages.appendChild(node);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function normalizeChatText(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function tokenizeChatText(text) {
    return normalizeChatText(text)
        .split(" ")
        .filter(Boolean)
        .map((token) => CHAT_TOKEN_ALIASES[token] || token);
}

function formatList(items) {
    const list = items.filter(Boolean);
    if (!list.length) return "";
    if (list.length === 1) return list[0];
    if (list.length === 2) return `${list[0]} and ${list[1]}`;
    return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
}

function pickReplyVariant(intent, variants) {
    if (!variants.length) return "";

    if (variants.length === 1) {
        lastReplyIndexByIntent[intent] = 0;
        return variants[0];
    }

    const previousIndex = lastReplyIndexByIntent[intent];
    let index = Math.floor(Math.random() * variants.length);

    if (index === previousIndex) {
        index = (index + 1) % variants.length;
    }

    lastReplyIndexByIntent[intent] = index;
    return variants[index];
}

function hasWholeWord(text, word) {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`).test(text);
}

function detectChatIntent(question) {
    const normalized = normalizeChatText(question);
    const tokens = tokenizeChatText(question);
    const tokenSet = new Set(tokens);
    const scores = {};

    Object.entries(CHAT_INTENT_RULES).forEach(([intent, rules]) => {
        let score = 0;

        (rules.phrases || []).forEach((phrase) => {
            if (normalized.includes(phrase)) score += 3;
        });

        (rules.keywords || []).forEach((keyword) => {
            if (tokenSet.has(keyword) || hasWholeWord(normalized, keyword)) score += 2;
        });

        scores[intent] = score;
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const [primaryIntent, primaryScore] = sorted[0] || ["fallback", 0];

    const followUpPattern = /\b(more|detail|details|elaborate|expand|continue|again|same|that one|that)\b/;
    if (primaryScore <= 1 && lastDetectedIntent && followUpPattern.test(normalized)) {
        return lastDetectedIntent;
    }

    if (primaryScore <= 0) {
        return "fallback";
    }

    return primaryIntent;
}

function getContextLine(question) {
    const corpus = getKnowledgeCorpus();
    if (!corpus) return "";

    const lines = corpus
        .split(/\n+/)
        .map((line) => line.trim())
        .filter((line) => line.length > 20);

    if (!lines.length) return "";

    const stopWords = new Set(["what", "which", "about", "with", "from", "into", "that", "this", "have", "your", "you", "for"]);
    const queryTokens = new Set(
        tokenizeChatText(question).filter((token) => token.length > 2 && !stopWords.has(token))
    );

    if (!queryTokens.size) return "";

    let bestLine = "";
    let bestScore = 0;

    lines.forEach((line) => {
        const lineTokens = new Set(tokenizeChatText(line));
        let score = 0;
        queryTokens.forEach((token) => {
            if (lineTokens.has(token)) score += 1;
        });
        if (score > bestScore) {
            bestScore = score;
            bestLine = line;
        }
    });

    return bestScore >= 2 ? bestLine : "";
}

function getTopContextLines(question, limit = 3) {
    const corpus = getKnowledgeCorpus();
    if (!corpus) return [];

    const lines = corpus
        .split(/\n+/)
        .map((line) => line.trim())
        .filter((line) => line.length > 20);

    if (!lines.length) return [];

    const stopWords = new Set([
        "what", "which", "about", "with", "from", "into", "that", "this", "have", "your", "you", "for",
        "are", "was", "were", "is", "am", "the", "and", "how", "can", "could", "would", "should", "please"
    ]);
    const queryTokens = tokenizeChatText(question).filter((token) => token.length > 2 && !stopWords.has(token));
    if (!queryTokens.length) return [];

    const scored = lines
        .map((line) => {
            const lineTokens = new Set(tokenizeChatText(line));
            let score = 0;
            queryTokens.forEach((token) => {
                if (lineTokens.has(token)) score += 2;
                else if (line.toLowerCase().includes(token)) score += 1;
            });
            return { line, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.line.length - b.line.length);

    const results = [];
    const seen = new Set();
    for (const item of scored) {
        if (results.length >= limit) break;
        if (seen.has(item.line)) continue;
        seen.add(item.line);
        results.push(item.line);
    }

    return results;
}

function getGeneralKnowledgeFallback(question) {
    const normalized = normalizeChatText(question);
    const asksForIndiaPM = (normalized.includes("prime minister") || hasWholeWord(normalized, "pm")) && normalized.includes("india");
    if (asksForIndiaPM) {
        return "The Prime Minister of India is Narendra Modi (as of February 2026).";
    }

    const asksForIndiaPresident = normalized.includes("president") && normalized.includes("india");
    if (asksForIndiaPresident) {
        return "The President of India is Droupadi Murmu (as of February 2026).";
    }

    return "";
}

function isWebsiteQuery(question) {
    const normalized = normalizeChatText(question);
    const terms = ["website", "site", "domain", "url", "link"];
    return terms.some((term) => hasWholeWord(normalized, term));
}

function getWebsiteGuardReply(question) {
    const normalized = normalizeChatText(question);
    const baseVariants = [
        `Official website is ${PROFILE_KB.website}.`,
        `You can access the portfolio at ${PROFILE_KB.website}.`,
        `Primary site/domain is ${PROFILE_KB.website}.`
    ];

    if (normalized.includes("old")) {
        const oldUiUrl = `${PROFILE_KB.website.replace(/\/$/, "")}/old`;
        return pickReplyVariant("website_guard_old", [
            `Main site: ${PROFILE_KB.website}. Old UI: ${oldUiUrl}.`,
            `Use ${PROFILE_KB.website} for new UI and ${oldUiUrl} for the old UI.`
        ]);
    }

    return pickReplyVariant("website_guard", baseVariants);
}

function isExperienceDurationQuery(question) {
    const normalized = normalizeChatText(question);
    const hasExperience = normalized.includes("experience");
    const hasYearCue = normalized.includes("year") || normalized.includes("years") || normalized.includes("yr");
    const hasDurationCue = normalized.includes("how many") || normalized.includes("how long") ||
        normalized.includes("total") || normalized.includes("overall") ||
        normalized.includes("how much") || normalized.includes("exact");
    return hasExperience && (hasYearCue || hasDurationCue);
}

function isExperienceQuery(question) {
    const normalized = normalizeChatText(question);
    const cues = [
        "experience", "career", "role", "position",
        "infosys", "deloitte", "working", "worked", "professional"
    ];
    return cues.some((cue) => hasWholeWord(normalized, cue));
}

function hasCorrectExperienceDuration(text) {
    if (!text) return false;
    return (
        /\b4\+?\s*(?:year|years|yr)\b/i.test(text) ||
        /\bfour\+?\s*(?:year|years)\b/i.test(text)
    );
}

function isGenericExperienceReply(text) {
    const normalized = normalizeChatText(text);
    if (!normalized) return true;
    return (
        /\b(?:has|is|with)\s+4\+?\s*(?:year|years|yr)\b/i.test(text) &&
        normalized.split(" ").length <= 14
    );
}

function isUncertainExperienceReply(text) {
    if (!text) return true;
    return /\b(i\s*(?:do\s*not|don't)\s*know|not\s*aware|not\s*sure|unknown|not\s*mentioned|cannot\s*confirm|can't\s*confirm|exact\s+.*not)\b/i.test(text);
}

function getExperienceGuardReply(question) {
    const normalized = normalizeChatText(question);
    const mentionsCurrentRole = normalized.includes("current") || normalized.includes("now") || normalized.includes("present");
    const asksOnlyCount = normalized.includes("how many") || normalized.includes("total") || normalized.includes("overall");

    if (mentionsCurrentRole) {
        return pickReplyVariant("experience_guard_current", [
            `${PROFILE_KB.totalExperience} overall experience, currently serving as Assistant Manager at Deloitte.`,
            `Current role is Assistant Manager at Deloitte, with ${PROFILE_KB.totalExperience} total industry experience.`,
            `He has ${PROFILE_KB.totalExperience} of experience and is now working as Assistant Manager at Deloitte.`
        ]);
    }

    if (asksOnlyCount) {
        return pickReplyVariant("experience_guard_count", [
            `Nabyendu has ${PROFILE_KB.totalExperience} of professional experience (Dec 2021 to present).`,
            `Total experience is ${PROFILE_KB.totalExperience}.`,
            `Overall industry experience: ${PROFILE_KB.totalExperience}.`
        ]);
    }

    return pickReplyVariant("experience_guard_full", [
        `Nabyendu has ${PROFILE_KB.totalExperience} of experience, progressing from Infosys to Assistant Manager at Deloitte.`,
        `${PROFILE_KB.totalExperience} total experience across Infosys and Deloitte backend engineering roles.`,
        `He brings ${PROFILE_KB.totalExperience} of professional experience with a path from Infosys to Deloitte.`
    ]);
}

function extractDomains(text) {
    if (!text) return [];
    const matches = text.match(/(?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}/gi) || [];
    return matches.map((item) => item.toLowerCase());
}

function enforceCriticalProfileFacts(userText, assistantText) {
    if (!assistantText) return assistantText;

    if (isWebsiteQuery(userText)) {
        const officialDomain = PROFILE_KB.website.replace(/^https?:\/\//i, "").toLowerCase();
        const mentionedDomains = extractDomains(assistantText);
        const hasOfficialDomain = mentionedDomains.some((domain) => domain.includes(officialDomain));
        const hasWrongDomain = mentionedDomains.some((domain) => !domain.includes(officialDomain));

        if (hasWrongDomain || !hasOfficialDomain) {
            return getWebsiteGuardReply(userText);
        }

        return assistantText;
    }

    const asksExperienceYears = isExperienceDurationQuery(userText);
    const asksExperienceGeneral = isExperienceQuery(userText);

    if (asksExperienceYears || asksExperienceGeneral) {
        const mustOverride =
            isUncertainExperienceReply(assistantText) ||
            (asksExperienceYears && !hasCorrectExperienceDuration(assistantText)) ||
            (asksExperienceYears && isGenericExperienceReply(assistantText));

        if (mustOverride) {
            return getExperienceGuardReply(userText);
        }
        return assistantText;
    }

    return assistantText;
}

function isGroqConfigured() {
    return Boolean(CHAT_API_ENDPOINT);
}

function trimChatHistory() {
    if (chatHistory.length <= MAX_CHAT_HISTORY_MESSAGES) return;
    chatHistory.splice(0, chatHistory.length - MAX_CHAT_HISTORY_MESSAGES);
}

function buildAssistantSystemPrompt() {
    const skills = PROFILE_KB.skills.slice(0, 20);
    const interests = PROFILE_KB.interests.slice(0, 8);
    const education = getEducationSummary(3);
    const achievements = PROFILE_KB.achievements
        .slice(0, 8)
        .map((item) => `${item.rank} | ${item.title} | ${item.meta}`);
    const primaryCertifications = collectPrimaryCertifications(24);
    const archiveCertifications = collectArchiveCertifications(24);
    const projectCount = PROFILE_KB.projectArchives.length;
    const certificateCount = PROFILE_KB.certificationsPrimary.length;
    const primaryCertificationsSnippet = primaryCertifications.join(" ; ").slice(0, 1800);
    const archiveCertificationsSnippet = archiveCertifications.join(" ; ").slice(0, 1200);

    return [
        "You are Nabyendu's AI Assistant on a portfolio website.",
        "Behavior rules:",
        "1) Be concise, helpful, and accurate.",
        "2) For portfolio questions, prioritize portfolio facts below.",
        "3) For general knowledge questions, answer normally like a general AI assistant.",
        "4) If unsure, say you are not sure instead of inventing.",
        `5) Official website/domain is exactly ${PROFILE_KB.website}. Never replace it with any other URL.`,
        `6) Total professional experience is ${PROFILE_KB.totalExperience}.`,
        "",
        "Portfolio facts:",
        `- Name: Nabyendu Ojha`,
        `- Total experience: ${PROFILE_KB.totalExperience}`,
        `- Current role: ${getCurrentRoleSummary()}`,
        `- Contact email: ${getContactEmail()}`,
        `- Skills: ${formatList(skills)}`,
        `- Interests: ${formatList(interests)}`,
        `- Education: ${formatList(education)}`,
        `- Key achievements: ${achievements.join(" ; ")}`,
        `- Project archives count: ${projectCount}`,
        `- Certification count: ${certificateCount}`,
        primaryCertificationsSnippet ? `- Primary certifications: ${primaryCertificationsSnippet}` : "",
        archiveCertificationsSnippet ? `- Civil/CAD certification archive: ${archiveCertificationsSnippet}` : ""
    ]
        .filter(Boolean)
        .join("\n");
}

function extractGroqResponseText(data) {
    const message = data?.choices?.[0]?.message?.content;

    if (typeof message === "string") {
        return message.trim();
    }

    if (Array.isArray(message)) {
        const merged = message
            .map((item) => {
                if (typeof item === "string") return item;
                if (item?.type === "text" && typeof item.text === "string") return item.text;
                return "";
            })
            .join(" ")
            .trim();
        return merged;
    }

    return "";
}

async function fetchGroqReply(userText) {
    if (!isGroqConfigured()) {
        throw new Error("Chat API endpoint is not configured.");
    }

    const systemPrompt = buildAssistantSystemPrompt();
    const messages = [
        { role: "system", content: systemPrompt },
        ...chatHistory.slice(-MAX_CHAT_HISTORY_MESSAGES),
        { role: "user", content: userText }
    ];

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), CHAT_API_TIMEOUT_MS);

    let response;
    try {
        response = await fetch(CHAT_API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages,
                temperature: 0.8,
                top_p: 0.9,
                max_tokens: 350
            }),
            signal: controller.signal
        });
    } catch (error) {
        if (error?.name === "AbortError") {
            throw new Error(`Chat API timed out after ${Math.round(CHAT_API_TIMEOUT_MS / 1000)}s.`);
        }
        throw error;
    } finally {
        clearTimeout(timeout);
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        const errMsg = data?.error?.message || `Groq request failed with ${response.status}`;
        throw new Error(errMsg);
    }

    const assistantText = extractGroqResponseText(data);
    if (!assistantText) {
        throw new Error("Groq returned an empty response.");
    }

    const correctedAssistantText = enforceCriticalProfileFacts(userText, assistantText);

    chatHistory.push({ role: "user", content: userText });
    chatHistory.push({ role: "assistant", content: correctedAssistantText });
    trimChatHistory();

    return correctedAssistantText;
}

function inferBotResponse(question) {
    const intent = detectChatIntent(question);
    lastDetectedIntent = intent;

    const email = getContactEmail();
    const resumeLink = getResumeLink();
    const skills = PROFILE_KB.skills;
    const skillSummary = formatList(skills.slice(0, 10));
    const experienceRoles = PROFILE_KB.professionalPath.map((item) => item.role);
    const achievements = PROFILE_KB.achievements
        .slice(0, 4)
        .map((item) => `${item.rank} in ${item.title} (${item.meta})`);
    const projectCount = PROFILE_KB.projectArchives.length;
    const certificateCount = PROFILE_KB.certificationsPrimary.length;
    const certificationNames = collectPrimaryCertificationNames(20);
    const certificationMetaList = collectPrimaryCertifications(20);
    const interests = PROFILE_KB.interests;
    const education = getEducationSummary(3);
    const contextHint = getContextLine(question);
    const generalKnowledgeReply = getGeneralKnowledgeFallback(question);

    if (generalKnowledgeReply) {
        return generalKnowledgeReply;
    }

    const responseMap = {
        greeting: [
            "Hi. Ask me anything about skills, experience, projects, certifications, or contact details.",
            "Hey. I can help with quick profile answers: experience, stack, achievements, projects, and resume.",
            "Hello. Ask your question in any format, and I will map it to the right profile detail."
        ],
        thanks: [
            "Glad to help. If you want, ask me next about experience depth, stack details, or certifications.",
            "Anytime. I can also summarize role-wise experience or key achievements in one answer.",
            "You're welcome. I can help with resume, skills, projects, achievements, or contact next."
        ],
        resume: [
            `You can download the resume directly here: ${resumeLink}`,
            `Resume link: ${resumeLink}. You can also find it in the hero section.`,
            `Use this direct resume PDF: ${resumeLink}`
        ],
        contact: [
            `You can reach out at ${email}, or send a note via the Message me form.`,
            `Best way to connect: ${email}. The contact form also sends directly.`,
            `Contact email is ${email}. You can also use the form in the contact section.`
        ],
        skills: [
            `Core stack includes ${skillSummary}.`,
            `Primary backend stack: ${skillSummary}.`,
            `Tech focus is backend-heavy, with tools like ${skillSummary}.`
        ],
        experience: [
            `${PROFILE_KB.totalExperience} of experience. ${getCurrentRoleSummary()}. Earlier roles include ${formatList(experienceRoles.slice(0, 3))}.`,
            `Current role: ${getCurrentRoleSummary()}. Total experience: ${PROFILE_KB.totalExperience}. Prior progression: ${formatList(experienceRoles.slice(0, 3))}.`,
            `Professional path moves from ${formatList(experienceRoles.slice(0, 3))} to ${getCurrentRoleSummary()}, with ${PROFILE_KB.totalExperience} overall experience.`
        ],
        achievements: [
            `Recent highlights include ${formatList(achievements.slice(0, 3))}.`,
            `Top achievements: ${formatList(achievements.slice(0, 3))}.`,
            `Competitive highlights include ${formatList(achievements.slice(0, 3))}.`
        ],
        projects: [
            `Selected Work Archives currently feature ${projectCount} categorized project folders with direct links.`,
            `There are ${projectCount} project archives spanning backend, web, cloud, mobile, and more.`,
            `Projects are organized into ${projectCount} archives across engineering, software, and creative work.`
        ],
        website: [
            `Official website is ${PROFILE_KB.website}.`,
            `You can access the portfolio at ${PROFILE_KB.website}.`,
            `Primary website/domain: ${PROFILE_KB.website}.`
        ],
        certifications: [
            `Training has ${certificateCount} certifications. Key ones include ${formatList(certificationNames.slice(0, 6))}.`,
            `Certifications include ${formatList(certificationMetaList.slice(0, 5))}, with certificate links in the section.`,
            `In Certifications and Internships, examples are ${formatList(certificationNames.slice(0, 6))} and more.`
        ],
        education: [
            `Education foundation includes ${formatList(education)}.`,
            `Academic path includes ${formatList(education)}.`,
            `Education highlights: ${formatList(education)}.`
        ],
        interests: [
            `Outside engineering, interests include ${formatList(interests)}.`,
            `Personal pursuits include ${formatList(interests)}.`,
            `Beyond work, focus areas include ${formatList(interests)}.`
        ],
        location: [
            "Location listed in the contact section is Kolkata, India.",
            "Based in Kolkata, India.",
            "Current location: Kolkata, India."
        ],
        fallback: [
            "I can answer profile questions on skills, experience, certifications, projects, achievements, and contact.",
            "Try asking about current role, tech stack, certifications, project archives, or resume link.",
            "Ask in any style. I can map it to profile topics like experience, skills, achievements, or contact."
        ]
    };

    const variants = responseMap[intent] || responseMap.fallback;
    let response = pickReplyVariant(intent, variants);

    if (intent === "fallback" && contextHint) {
        const cleanedHint = contextHint.replace(/^[A-Za-z ]+:\s*/, "");
        response = `${response} Example from profile: ${cleanedHint}`;
    }

    return response;
}

function buildLocalFallbackReply(question) {
    const intent = detectChatIntent(question);
    if (intent !== "fallback") {
        return inferBotResponse(question);
    }

    const generalKnowledgeReply = getGeneralKnowledgeFallback(question);
    if (generalKnowledgeReply) {
        return generalKnowledgeReply;
    }

    const contextLines = getTopContextLines(question, 3);

    if (contextLines.length) {
        const cleaned = contextLines
            .map((line) => line.replace(/^[A-Za-z ]+:\s*/, "").replace(/\s+/g, " ").trim())
            .filter(Boolean);

        if (cleaned.length === 1) {
            return cleaned[0];
        }

        return `${cleaned[0]} Also, ${cleaned[1]}`;
    }

    return inferBotResponse(question);
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

    const typingDelayMs = 320 + Math.floor(Math.random() * 420);
    await new Promise((resolve) => setTimeout(resolve, typingDelayMs));

    let response = "";
    try {
        response = await fetchGroqReply(text);
    } catch (error) {
        console.warn("Chat API request failed:", error);
        try {
            response = buildLocalFallbackReply(text);
        } catch (fallbackError) {
            console.error("Local fallback failed:", fallbackError);
            response = "I could not respond right now. Please try again in a moment.";
        }
    }

    if (!response || !String(response).trim()) {
        response = "I could not generate a response right now. Please try again.";
    }

    typing.classList.remove("typing-indicator");
    typing.textContent = response;
    messageSound?.play().catch(() => { });
}

window.addEventListener("load", () => {
    setYear();
    // setViewerCount(); // Viewer counter disabled
    hidePreloader();
    toggleHeaderShadow();
});

window.addEventListener("scroll", toggleHeaderShadow);

setupNavigation();
setupActiveNavHighlight();
setupContactForm();
setupChat();
