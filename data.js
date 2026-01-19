const data = {
	firstName: "Marko",
	lastName: "Kurylko",

	title: "Senior Software Engineer",
	email: "<NameSurname>@gmail.com",

	networks: new Map([
		["LinkedId", "https://www.linkedin.com/in/marko-kurylko"],
	]),

	objective: `Passionate and results-oriented Java Developer seeking an opportunity to contribute expertise in
                Java development to a dynamic team. Looking for a role where I can apply my 10+ years of Java
                experience and work on challenging e-commerce and enterprise-level projects. Open to exploring
                new technologies and continuously improving software development processes`,
	summary: "Summary",

	keyExpertise: new Map([
		["E-Commerce", "Extensive experience in developing large-scale Oracle ATG Web Commerce Platform and Spring Framework based solutions"],
		["Content Managing Systems", "Experience in creating enterprise level CMS applications and web services"],
		["Software Engineering Best Practices", "Strong focus on code quality, refactoring, and coding standards"],
		["Mentorship & Leadership", "Experience in mentoring and guiding newcomers"],
		["Third-Party Integration", "Proven ability to integrate third-party systems into existing platforms"]
	]),

	technologies: {
		languages: {
			main: ["Java", "Java Server Pages", "SQL"],
			auxiliary : ["JavaScript", "HTML", "XML"]
		},
		platforms: ["Oracle ATG Web Commerce"],
		frameworks: ["Spring", "JUnit"],
		databases: ["Oracle RDBMS"],
		webAndApplicationServers: ["Apache Tomcat", "JBoss"],
		buildSystems: ["Apache Ant", "Apache Maven", "Gradle"],
		CVS: ["Git", "SVN"],
		IDE: ["IntelliJ IDEA", "Eclipse"],
		OS: ["Microsoft Windows", "Linux"]
	},

	languages: new Map([["English", "B2"], ["Ukrainian", "Native"], ["Russian", "Native"],]),

	education : {
		startDate: "1995.09.01", endDate: "2000.06.30",
		institution: "State Higher Education Establishment 'Donetsk National Technical University'",
		url: "https://donntu.edu.ua/en",
		degrees : ["Bachelor", "Specialist(master)"]
	},

	experience: [
		{company: "EPAM Systems", url: "https://www.epam.com", startDate: "2014.07.07", endDate: "2024.03.22",
			brief: `Worked on various e-commerce applications based on Oracle ATG Web Commerce platform and Spring framework.
					Order and user management, checkout pages and shopping cart, third-party integrations.
					Technologies: Java, Java Server Pages, Oracle ATG Web Commerce platform, Spring, SQL, Javascript, HTML, XML`,

			projects: [
				{startDate: "2023.05.02", endDate: "2024.03.22",
				 customer: "British luxury fashion house",
				 name: "Payment & Fulfilment",
				 location: "Krakow, Poland",
				 roles: ["Java Developer", "Security champion"],
				 description: `Various e-commerce applications based on Oracle ATG Web Commerce platform and Spring framework`,
				 workedOn: [
					"Online Store: Checkout pages, multi-country support, shopping cart & product info API",
					"Commerce Service Center: Checkout pages",
					"Data Warehouse: GDPR user anonymization (scheduled job)",
					"Fulfilment: Commerce reports generation (scheduled jobs)",
					"Adaptation of Oracle ATG Web Commerce to run with Java 8 compiled libraries",
					"Applying NewRelic library for monitoring & analytics",
					"Fixed security vulnerabilities (XSS, Arbitrary Code Execution etc.) using Snyk.io"
				 ],
				 technologies: ["Java 6", "JSP", "Oracle ATG Web Commerce (v 9.4)", "JavaScript", "Spring 2.6",
								"Oracle DB", "Oracle SQL Developer", "Oracle VirtualBox",
								"IntelliJ IDEA", "Snyk.io", "Jenkins", "Gradle", "Git", "SVN"],
				 thirdPartyIntegrations: ["Adyen", "CyberSource", "NewRelic"]
				},

				{startDate: "2017.04.02", endDate: "2023.04.28",
				 customer: "UK retailer of trade tools, accessories and hardware",
				 name: "Web Commerce Multi-Channel Enhancement",
				 location: "Kharkiv, Ukraine",
				 roles: ["Java Developer"],
				 description: "Various e-commerce applications based on Oracle ATG Web Commerce platform",
				 workedOn: [
					`Online Store: Order history in user profile,
						send user\u0027s orders via email,
						GDPR compliance & TrustArc cookie banner integration,
						product recommendations (FredHopper API integration),
						request optimization for MovableInc Product API`,
					"Online Store, Contact Centre, TradeCounter: Extended user registration & password reset flows",
					"Contact Centre, TradeCounter: email notifications for created user accounts",
					"Business Control Center: Enhanced CSV/XLS import for promotions with Oracle ATG PMDLRule validation",
					"Customization for Ireland: Currency symbol (£/€) localization, AddressService upgrade (support for Irish addresses via GBG API), Feature toggle for charity donations at checkout",
					"Upgraded Pin Entry Device (PED) integration for TradeCounter app: PED emulator, HTML/Vue.js testing tool, JavaScript framework for PED. Payment, refund, token verification, and report integration"
				 ],
				 technologies: ["Java 6", "Java 8", "Oracle Web Commerce (ATG 10/11)", "JavaScript",
								"Oracle DB", "Oracle VirtualBox", "Microsoft Hyper-V",
								"IntelliJ IDEA", "Ms Visual Studio Code", "Apache Buildr", "Git"
				 ],
				 thirdPartyIntegrations: ["TrustArc", "MovableInc", "Fredhopper"]
				},

			   {startDate: "2017.02.01", endDate: "2017.03.30",
				customer: "Epam Internal",
				name: "ATG Atoms",
				location: "Kharkiv, Ukraine",
				roles: ["Java Developer"],
				description: "Developed tools for integrating ATG-based systems with IBM Sterling, SAP, and enhancing ATG development utilities",
				workedOn: [
					"Integrated Lombok library for simplified code management",
					"Introduced custom annotation @Configuration to simplify ATG components creation",
					"Developed order export from ATG to SAP",
					"Fixed bugs in price import from SAP to ATG"
				],
				technologies: ["Java 7", "Oracle Web Commerce (ATG 11)", "Oracle XE DB", "Eclipse", "Jenkins", "Apache Maven", "Git"]
			   },

			   {startDate: "2016.07.01", endDate: "2017.01.31",
				customer: "Canadian retail in the automotive, hardware, sports, leisure and housewares sectors",
				name: "Point of Sale (PoS) Terminal System (Retail Network)",
				location: "Kharkiv, Ukraine",
				roles: ["Java Developer"],
				description: "Development and enhancement of the back-office system for retail stores",
				workedOn: [
					"Created REST API for managing web links (CRUD)",
					"Updated User Role Hierarchy Model and permissions",
					"Enhanced User Management API (Activate, Deactivate, Unlock, Update)",
					"Created new user role permissions"
				],
				technologies: ["Java 8", "Spring MVC", "Spring Data", "Spring Security", "Hibernate",
					"MariaDB", "Eclipse", "Oracle VirtualBox", "Jenkins", "Apache Maven", "Gerrit", "Git"]
			   },

			   {startDate: "2016.02.01", endDate: "2016.06.30",
				customer: "Chicago-based company primarily deals in mobile/web payment systems for e-commerce",
				name: "Payment Method Integration for Customer",
				location: "Kharkiv, Ukraine",
				roles: ["Java Developer"],
				description: "Development of a plugin-like extension to integrate customer’s payment methods with the Oracle ATG Web Commerce",
				workedOn: [
					"Implemented customer’s payment group foundation",
					"Developed base checkout processing using customer's payment method",
					"Added transaction search functionality in the ATG Customer Service Centre application"
				],
				technologies: ["Java 7", "Oracle ATG Web Commerce (11.1/11.2)", "Oracle DB", "Customer's sandbox",
					"Javascript", "jQuery", "Dojo Toolkit", "Eclipse", "Apache Ant", "Git"]
			   },

			   {startDate: "2014.09.01", endDate: "2016.01.31",
				customer: "British department store (clothes, home & garden goods)",
				name: "ATG-Based E-Commerce Solution",
				location: "Kharkiv, Ukraine",
				roles: ["Java Developer"],
				description: "Development of various Oracle ATG Web Commerce applications, including loyalty programs, delivery booking, international site," +
                              "checkout re-implementation, REST API development and performance improvements",
				workedOn: [
					"Developed new features in Online Store app: 7-day delivery sofas view improvement, enhanced price range (discount) representation, 'Save for Later' checkout feature",
					"Created B2B Contact Us form and backend",
					"Bug fixing and optimized site performance (reduced traffic by optimising HTML attr names)"
				],
				technologies: ["Java 6", "Oracle ATG Web Commerce (v. 9)", "Oracle DB", "JMS", "JBOSS AS", "JUnit", "Groovy", "Spock Test Framework",
					"Eclipse", "Apache Maven", "SVN"]
			   }
			]
		},

		{company: "Soft Xpansion Ukraine", url: "http://www.soft-xpansion.com.ua", startDate: "2012.01.02", endDate: "2014.06.30",
			brief: `Customization of a Content Management System based on EMC² Documentum platform for several customers`,

			projects: [
			   {startDate: "2012.01.02", endDate: "2014.06.30",
				customers: ["NNEGC 'Energoatom'", "PJSC 'ArcelorMittal Kryvyi Rih'", "ING Bank International"],
				name: "Document Management System (EMC Documentum)",
				location: "Donetsk, Ukraine",
				roles: ["Java Developer"],
				description: "Development of document management system with a tree-like file storage for electronic documents" +
							"(agreements, engineering drawings) and customization of document workflows",
				workedOn: [
					"Developed custom components for Java EE applications (Java, XML config, JSP/XSLT pages)",
					"Created a web service to retrieve and cache document thumbnails from the application database",
					"Modified and optimized the database structure",
					"Optimized Report generation time"
				],
				technologies: ["Java 5", "EMC Documentum", "EMC DB Composer", "DQL Console", "Oracle 10i DB", "Tomcat 6.0",
								"JAX-WS", "XML", "XSLT", "JavaScript", "Eclipse", "Apache Ant", "CVS"]
			   }
			]
		}

	]
}