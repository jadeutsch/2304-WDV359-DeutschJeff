# Project & Portfolio 

* **Research Notes - Milestone 2**
* **Jeff Deutsch**
* **Assignment Due: 4-18-2023**

<br>


## Topic

This document contains general notes related to the business side of web/software development covering topics in metrics, analytics, and tools.

<br>

## Software Development Metrics
Steven Lowe's [article]([1]) takes a different approach regarding software development metrics. He explains how metrics should be used to "support the specific questions a business really needs" answers to. Below are some of the key metrics and points he does talk about that one should monitor continuously to make incremental improvements to processes and production environments as they relate to agile processes. 

* Agile Process Metrics
	- Lead Time
		- how long it takes to go from idea to delivered software
	- Cycle Time
		- how long it takes to make a change in the software system and deliver that change into production (for continuous delivery, this can be measured in seconds or minutes instead of months)
	- Team Velocity
		- how many "units" of software the team typically completes in an iteration or "sprint."
	- Open/Close Rates
		- how many production issues are reported and closed within a specific time period (the general trend matters more than specific numbers)     
* Production Analytics
	- These first two measure the software system's performance in its current production environment 
		- Mean Time Between Failures (MTBF)
		- Mean Time To Recover/Repair (MTTR)
	- Application Crash Rate
		- how many times an application fails divided by how many times it is used
* Security Metrics
	- Endpoint Incidents
		- how many endpoints (the number of devices in use) have experienced a virus infection over a given period of time
	- MTTR
		- in security, this is the time between discovering a security breach and a deployed, working remedy.
* Heuristics for Effective Metric Use
	- Metrics cannot tell you the story; only the team can do that
	- Comparing snowflakes is a waste
	- You can measure almost anything, but you can't pay attention to everything
	- Business success metrics drive software improvements, not the other way round
	- Every feature adds value; either measure it or don't do it
	- Measure only what matters now

<br>

## Analytics
Analytics, as described in Kevin Lobo's [article]([2]), is a "broad term covering four different pillars in the modern analytics model," with each playing a role in how businesses can better understand what the data shows and how these insights can be used to dive business objectives. Below are the four pillars of analytics.

* Descriptive Analytics
	- answers questions like "What happened" and "What have we done in the past"
	- used to understand the overall performance at an aggregate level
	- usually, the easiest place for a company to start collecting data since it tends to be quickly available
* Diagnostic Analytics
	- answers the question, "why did it happen?"
	- uses historical data like descriptive analysis does
* Predictive Analytics
	- answers questions like "What will happen" or "What will likely happen"
	- uses historical data to predict possible outcomes and future trends
* Prescriptive Analytics
	- answers the question "How should action be taken"
	- combines descriptive, diagnostic, and predictive analyses to drive decision-making.

<br>

## Web Analytics
Web analytics is all about how your website is performing and contributing to one's business, whether that be a blog or storefront. As [this article]([3]) on parse.ly shows, the list of tools is quite extensive, ranging from all-encompassing to very specific. Here are the types of tools it covers, what they are, and at least one example of each.

* Content Analytics
	- tools that measure how various audiences consume and share their content which presents data on how to engage readers better and increase conversions
	- example: Parse.ly
* Customer Analytics
	- tools that provide a deeper understanding of customer behavior than general web analytics tools; pulls customer data from different mediums to show behavior patterns
	- example: Kissmetrics
* Usability (UX) Analytics
	- tools that analyze how users interact with a page by recording user actions
	- example: Crazy Egg
* A/B and Multivariate Testing
	- tools that test two or more versions of specific webpage elements to determine which performs betters
	- example: Optimizely
* Social Media Analytics
	- tools that help show how businesses can grow audiences and engagements on social media
	- example: Sprout Social
* SEO Analytics
	- tools that provide data on keyword analyses to provide new opportunities in gaining traffic from search engines
	- example: Ahrefs
* General Enterprise Analytics
	- tools specifically designed for businesses that handle large amounts of data
	- example: Google Analytics 360
* Open Source Web Analytics
	- tools designed to analyze data from custom code stored on in-house, managed servers
	- example: Matomo
* Product Analytics
	- toos that measure how people interact with and use a digital technology product or app rather than a website
	- example: Mixpanel


    
<br>

## Reference Links

**Resource 1: _9 metrics that can make a difference to today's software development teams_**  
[1]: https://techbeacon.com/app-dev-testing/9-metrics-can-make-difference-todays-software-development-teams 

**Resource 2: _What Are the Four Types of Analytics and How Do You Use Them?_**    
[2]: https://www.analytics8.com/blog/what-are-the-four-types-of-analytics-and-how-do-you-use-them/

**Resource 3: _9 Types of Web Analytics Tools - And How to Know Which Ones You Really Need_**      
[3]: https://blog.parse.ly/web-analytics-software-tools/




