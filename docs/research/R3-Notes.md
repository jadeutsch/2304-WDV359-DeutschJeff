# Project & Portfolio

- **Research Notes - Milestone 3**
- **Jeff Deutsch**
- **Assignment Due: 4-25-2023**

<br>

## Topic

This document contains general notes related to security and its tools.

<br>

These first two subtopics both come directly from OWASP. OWASP (Open Worldwide Application Security Project), as stated on [their website]([1]), is "a nonprofit foundation that works to improve the security of software." The site acts as a place where developers can find tools, resources, community, networking, education, and training in all things security-related for developers and technologists.

<br />

## Web Application Security

As part of their ongoing mission to provide developers with resources about security, OWASP releases their top 10. It's a "[standard awareness document]([2]) for developers and web application security...representing a broad consensus about the most critical security risks to web applications." Here are the top 10 web application security risks as of 2021.

1. Broken Access Control
   - refers to policies enforcing such that users cannot act outside of their intended permissions
   - failures result in unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits
2. Crytographic Failures
   - previously called _"Sensitive Data Exposure"_, this focuses on failures related to cryptography (or lack thereof) leading to the exposure of sensitive data
   - common weaknesses include the use of hard-coded passwords, broken or risky crypto algorithms, and insufficient entropy
3. Injection
   - refers to an attacker's attempt to send data to an application in a way that will change the meaning of commands being sent to an interpreter
   - injection attack vulnerabilities include user-supplied data that isn't validated, filtered, or sanitiezed, and hostile data being directly used or concatenated
   - common injections types are SQL, NoSQL, OS command, Object Relational Mapping, LDAP, Expression Language, and Object Graph Navigation Library
4. Insecure Design
   - refers to the risks related to design and architectural flaws while calling for more threat modeling use, secure design patters, and reference architecture
   - common weaknesses include generating error messages containing sensitive information, unprotected credential storage, and insufficiently protected credentials
5. Security Misconfigurations
   - as software has become far more configurable, it also increases the risks of misconfigurations, thereby creating security flaws
6. Vulnerable & Outdated Components
   - refers to unmaintained third-party components, which can include things like operating systems and libraries
7. Identification & Authentication Failures
   - previously called _"Broken Authentication"_, this section refers to improperly managed authentication and validation rules and credentials
8. Software & Data Integrity Failures
   - focuses on software updates and critical data without verifying the integrity
9. Security Logging & Monitoring Failures
   - as the section name implies, these types of failures can be difficult to test for, often involvinging interviews or asking if attacks were detected during penetration testing
10. Server-Side Request Forgery
    - a smaller category listed in the document, but increasing in incidence and severity, this section talks about flaws that occur whenever web applications fetch remote resources without validating the user-supplied URL

<br>

## Mobile Application Security

OWASP also provides [documentation]([3]) on security risks inherent to mobile applications. The foundation is currently working on the 2023 list, but the 2016 list is still very relevant.

1. Improper Platform Usage
   - covers the misuse of a platform feature or failure to use the platform's security controls
2. Insecure Data Storage
   - pertains to instances where attackers have obtained a lost/stolen device, or malware inside a repackaged app that executes on the mobile device
3. Insecure Communication
   - refers to instances where attackers may try to exploit vulnerabilities to intercept sensitive data
4. Insecure Authentication
   - exploiting authentication vulnerabilities through automated attacks via available or custom-built tools
5. Insufficient Cryptography
   - refering to having access to improperly encrypted data
6. Insecure Authorization
   - exploiting authorization vulnerabilities through automated attacks via available or custom-built tools
7. Client Code Quality
   - refers to passing untrusted inputs to method calls made within mobile code
   - while types of issues are not exactly security issues, they can lead to security vulnerabilities
8. Code Tampering
   - exploiting code modification using malicious forms of apps hosted in third-party app stores
9. Reverse Engineering
   - analyzing and rebuilding a targeted app
10. Extraneous Functionality
    - used to discover hidden functionality within backend systems to then launch an attack

<br>

## Security Tools for Developers

In the above topics, we've covered the instances where developers should be conscious of security issues that arise. Now we start getting into some of the tools used. [Hackernoon's article]([4]) about DevSecOps (Development Security Operations) tools explains a little about DevOps was the first model using streamlined and automation processes for speeding up developement, and how DevSecOps introduced security into the process. Here are the tools that are the "must-haves" for security.

1. OWASP Threat Dragon
   - an open-source threat-modeling tool liked to GitHub
2. OWASP Dependency Track
   - an analysis platform used to identify and reduce risks in the components, libraries, tools, and processes used to develop, build, and publish software
3. Brakeman
   - a static application security testing (SAST) tool that looks for vulnerabilities related to Ruby on Rails applications
4. WhiteSource Cure
   - an IDE plugin that scans code for vulnerabilities and provides remediation instructions directly inside the IDE itself
5. Sandboxie
   - just as the name implies, it is a Windows sandbox program allowing developers and security professionals to test unknown or suspicious software in a safe environment
6. SonarQube Community
   - an open-source source-code tool for analysis that supports many languages
7. GitLab
   - a web-based DevOps platform facilitating collaboration between development, security and Ops team.
8. Alerta
   - a tool providing scalable methods for scanning and studying code, while also integrating with management and monitoring systems like Prometheus and Amazon CloudWatch

<br>

## Reference Links

**Resource 1: _Who is the OWASP Foundation?_**  
[1]: https://owasp.org

**Resource 2: _OWASP Top Ten_**  
[2]: https://owasp.org/www-project-top-ten/

**Resource 3: _OWASP Mobile Top 10_**  
[3]: https://owasp.org/www-project-mobile-top-10/

**Resource 4: _8 Must-Have Security Tools for Developers_**
[4]: https://hackernoon.com/8-must-have-security-tools-for-developers
