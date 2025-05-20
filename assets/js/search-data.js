// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A few of my GitHub repositories — projects, writeups, and code experiments from my academic and personal work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-academia",
          title: "academia",
          description: "A collection of coursework, notes, and projects from my journey through Computer Science and Applied Math. Built to document what I’ve learned and share how I think.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academia/";
          },
        },{id: "post-tryhackme-active-directory-basics",
        
          title: 'TryHackMe Active Directory Basics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://devinkhun.medium.com/tryhackme-active-directory-basics-b15c43b8871c?source=rss-76cf572bbe82------2", "_blank");
          
        },
      },{id: "post-tryhackme-windows-fundamentals-2",
        
          title: 'TryHackMe Windows Fundamentals 2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://devinkhun.medium.com/tryhackme-windows-fundamentals-2-ff7fa4696529?source=rss-76cf572bbe82------2", "_blank");
          
        },
      },{id: "academia-mat-4170-introduction-to-abstract-algebra-i",
          title: 'MAT 4170 – Introduction to Abstract Algebra I',
          description: "Introduction to algebraic structures, groups, rings, and fields; permutation groups, cyclic groups, homomorphisms and isomorphisms, quotient groups, polynomial rings.",
          section: "Academia",handler: () => {
              window.location.href = "/academia/MAT4170/";
            },},{id: "academia-mat-4280-functions-of-a-complex-variable",
          title: 'MAT 4280 – Functions of a Complex Variable',
          description: "Algebra, geometry, and topology of complex numbers; limits of complex functions, complex functions as mappings, continuity; multivalued functions and branches; complex differentiability and analyticity, harmonic functions; differentiation of power series functions; definition and properties of the elementary functions; contour integration and the Cauchy integral theorems; the maximum modulus principle; Taylor and Laurent series; the residue theorem; conformal mapping; the argument principle; applications to problems in mathematics, physics, and engineering at the discretion of the instructor.",
          section: "Academia",handler: () => {
              window.location.href = "/academia/MAT4280/";
            },},{id: "academia-mat-4800-introduction-to-nonlinear-optimization",
          title: 'MAT 4800 – Introduction to Nonlinear Optimization',
          description: "Development of the theory, algorithms, and applications of nonlinear optimization, including unconstrained optimization, convex optimization, iterative methods for unconstrained optimization, and constrained optimization.",
          section: "Academia",handler: () => {
              window.location.href = "/academia/MAT4800/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-rocket-new-portfolio-launch-i-m-hyped-to-announce-that-my-portfolio-is-now-live-it-features-selected-projects-coursework-and-write-ups-on-what-i-ve-been-building-and-learning-lately-check-it-out-and-let-me-know-what-you-think-feedback-is-always-welcome-eyes-point-right-view-portfolio",
          title: ':rocket: New Portfolio Launch! I’m hyped to announce that my portfolio is now...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/311937078948790272", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%68%75%6E%64%65%76%69%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/devingineer", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/devinnkhunn", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/DevinKhun/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/devin-khun", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
