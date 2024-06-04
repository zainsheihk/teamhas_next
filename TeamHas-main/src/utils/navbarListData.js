const navList = [
    {
        name: "Home",
        path: "/",
        children: [],
        isNested: false,
        isViewAll: false,
    },
    {
        name: "Services",
        path: "#",
        children: [
            {
                name: "Ad Creatives",
                desc: "Crafting captivating advertisements",
                path: "/services/adcreatives",
                img: '/imgs/ads.png',
            },
            {
                name: "Social Media creative",
                desc: "Energizing Your Social Presence",
                path: "/services/socialmediacreative",
                img: '/imgs/sms.png',
            },
            {
                name: "Email Design",
                desc: "Simplifying Complex Data",
                path: "/services/emaildesign",
                img: '/imgs/eds.png',
            },
            {
                name: "Presentation Design",
                desc: "Amplifying Your Message ",
                path: "/services/presentationdesign",
                img: '/imgs/pds.png',
            },
            {
                name: "E-learning Design",
                desc: "Educational, Engaging, Enlightening s",
                path: "/services/elearningdesign",
                img: '/imgs/els.png',
            },
            {
                name: "Packaging & Merch Design",
                desc: "Packaging that Pops",
                path: "/services/",
                img: '/imgs/eds.png',
            },
            {
                name: "Brand Identity",
                desc: "Crafting Your Brands Soul",
                path: "/services/brandidentity",
                img: '/imgs/bis.png',
            },
            {
                name: "UI & UX Design",
                desc: "Building Your Digital Front",
                path: "/services/uianduxdesign",
                img: '/imgs/ixds.png',
            },
            {
                name: "Motion Graphics",
                desc: "Bringing Stories to Life",
                path: "/services/motiongraphic",
                img: '/imgs/mds.png',
            },
            {
                name: "Animations",
                desc: "Animating Your Ideas",
                path: "/services/animation",
                img: '/imgs/ans.png',
            },
            {
                name: "Video Production",
                desc: "Visualizing Your Narrative",
                path: "/services/videoproduction",
                img: '/imgs/vps.png',
            },
            {
                name: "Illustrations",
                desc: "Creating Memorable Characters",
                path: "/services/illustrations",
                img: '/imgs/ils.png',
            },
            {
                name: "3D Models & Mockups",
                desc: "isualizing Before Creating",
                path: "/services/3dmodelsandmockups",
                img: '/imgs/3ds.png',
            },
            {
                name: "Comics",
                desc: "Illustrating Stories, One Panel at Link Time",
                path: "/services/comics",
                img: '/imgs/eds.png',
            },
        ],
        isNested: true,
        isViewAll: {
            name: "View All",
            path: "/services",
        },
        classess: "service-cls"
    },
    {
        name: "Our Work",
        path: "/portfolio",
        children: [],
        isNested: false,
        isViewAll: false,
    },
    {
        name: "Pricing",
        path: "/pricing",
        children: [],
        isNested: false,
        isViewAll: false,
    },
    {
        name: "About",
        path: "/",
        children: [
            {
                name: "About us",
                path: "/about",
                img: '/imgs/aboutlogo.png',
            },
            {
                name: "Career",
                path: "/career",
                img: '/imgs/careerlogo.png',
            },
            {
                name: "Contact us",
                path: "/contact",
                img: '/imgs/contactuslogo.png',
            },
        ],
        isNested: true,
        isViewAll: false,
        classess: "about-cls"
    },

];

export const serviceNavList = [
    {
        name: "Ad Creatives",
        desc: "Crafting captivating advertisements",
        path: "/services/adcreatives",
        img: '/imgs/ads.png',
    },
    {
        name: "Social Media creative",
        desc: "Energizing Your Social Presence",
        path: "/services/socialmediacreative",
        img: '/imgs/sms.png',
    },
    {
        name: "Email Design",
        desc: "Simplifying Complex Data",
        path: "/services/emaildesign",
        img: '/imgs/eds.png',
    },
    {
        name: "Presentation Design",
        desc: "Amplifying Your Message ",
        path: "/services/presentationdesign",
        img: '/imgs/pds.png',
    },
    {
        name: "E-learning Design",
        desc: "Educational, Engaging, Enlightening s",
        path: "/services/elearningdesign",
        img: '/imgs/els.png',
    },
    {
        name: "Packaging & Merch Design",
        desc: "Packaging that Pops",
        path: "/services/packagingandmerchdesign",
        img: '/imgs/eds.png',
    },
    {
        name: "Brand Identity",
        desc: "Crafting Your Brands Soul",
        path: "/services/brandidentity",
        img: '/imgs/bis.png',
    },
    {
        name: "UI & UX Design",
        desc: "Building Your Digital Front",
        path: "/services/uianduxdesign",
        img: '/imgs/ixds.png',
    },
    {
        name: "Motion Graphics",
        desc: "Bringing Stories to Life",
        path: "/services/motiongraphic",
        img: '/imgs/mds.png',
    },
    {
        name: "Animations",
        desc: "Animating Your Ideas",
        path: "/services/animation",
        img: '/imgs/ans.png',
    },
    {
        name: "Video Production",
        desc: "Visualizing Your Narrative",
        path: "/services/videoproduction",
        img: '/imgs/vps.png',
    },
    {
        name: "Illustrations",
        desc: "Creating Memorable Characters",
        path: "/services/illustrations",
        img: '/imgs/ils.png',
    },
    {
        name: "3D Models & Mockups",
        desc: "isualizing Before Creating",
        path: "/services/3dmodelsandmockups",
        img: '/imgs/3ds.png',
    },
    {
        name: "Comics",
        desc: "Illustrating Stories, One Panel at Link Time",
        path: "/services/comics",
        img: '/imgs/eds.png',
    },
]

export const footerLinks = [
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Ad Creatives",
        path: "/services/adcreatives",
    },
    {
        name: "Social Media Design",
        path: "/services/socialmediacreative",
    },
    {
        name: "Email Design",
        path: "/services/emaildesign",
    },
    {
        name: "Presentation Design",
        path: "/services/presentationdesign",
    },
    {
        name: "Brand Identity",
        path: "/services/brandidentity",
    },
    {
        name: "UI&UX Design",
        path: "/services/uianduxdesign",
    },
    {
        name: "Motion Graphics",
        path: "/services/motiongraphic",
    },
    {
        name: "Illustrations",
        path: "/services/illustrations",
    },
    {
        name: "3D Models & Mockups",
        path: "/services/3dmodelsandmockups",
    },
    {
        name: "Packaging & Merch Design",
        path: "/services/packagingandmerchdesign",
    },
    {
        name: "E-Learning Graphics",
        path: "/services/elearningdesign",
    },
    {
        name: "Animations",
        path: "/services/animation",
    },
    {
        name: "Video Production",
        path: "/services/videoproduction",
    },
    {
        name: "Comics",
        path: "/services/comics",
    },
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Our Work",
        path: "/portfolio",
    },
    {
        name: "Pricing",
        path: "/pricing",
    },
    {
        name: "About us",
        path: "/about",
    },
    {
        name: "Contact us",
        path: "/contact",
    },
    {
        name: "Book a call",
        path: "/bookacall",
    },

    {
        name: "Careers",
        path: "/career",
    }

]