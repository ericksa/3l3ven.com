# Master Resume — Adam M. Erickson

> **Last Updated:** August 8, 2026  
> **Purpose:** Complete inventory of all skills, experience bullets, metrics, education, certifications, and clearance. Use as a source bank when customizing resumes for specific roles.

---

## Contact & Status

| Field | Detail |
|-------|--------|
| Name | Adam M. Erickson |
| Location | Whitehall, MI |
| Phone | (231) 343-7221 |
| Email | adam@a-erickson.com |
| LinkedIn | linkedin.com/in/ericksonadamm |
| GitHub | github.com/ericksa |
| Security Clearance | Active DoD Secret (Tier 3, issued 2022) |
| Veteran Status | Disabled Veteran, 10-Point Preference |

---

## Professional Summary Variants

**Variant A — GovCloud/DoD Focus:**
> Senior Software Engineer with 20+ years of enterprise experience migrating legacy systems to AWS GovCloud microservices. Proven track record of modernizing DoD healthcare systems with 85% performance improvements and 50% downtime reductions. Expertise in Java microservices, event-driven architectures, and GitOps pipelines. Expertise in Java with a strong ability to pivot to C#/.NET environments due to deep understanding of OOP and enterprise design patterns. Active Secret clearance.

**Variant B — Backend Architect Focus:**
> Results-oriented Senior Software Engineer and Backend Architect with over 20 years in IT and 8+ years specializing in Java development. Expert in architecting secure, scalable enterprise systems and cloud-native architectures (AWS GovCloud), with a proven track record of modernizing legacy DoD and Healthcare systems — including a 60% boost in processing throughput and an 85% reduction in deployment times. Expertise in Java with a strong ability to pivot to C#/.NET environments due to deep understanding of OOP and enterprise design patterns.

**Variant C — Concise:**
> Senior Software Developer with 20+ years of enterprise experience, 10+ years in Java development, and active DoD Secret clearance. Proven track record modernizing AWS GovCloud systems with 70–85% performance improvements. Expert in microservices architecture, cloud-native development, and container orchestration. Expertise in Java with a strong ability to pivot to C#/.NET environments due to deep understanding of OOP and enterprise design patterns.

---

## Master Skills Inventory

### Languages
Java (8, 11, 17, 21), C#/.NET, Python, SQL, PL/SQL, Bash/Shell Scripting, JavaScript, Groovy

### Frameworks & Libraries
Spring Boot, Spring Cloud, Hibernate, JPA, Apache Camel, JMS, Red Hat Fuse, React, Thymeleaf, Lombok, Jasper Reports

### Cloud & Infrastructure
AWS GovCloud, AWS (EC2, S3, Lambda, Redshift, EKS, Elastic Beanstalk), Docker, Kubernetes, OpenShift, VMware ESXi

### Event-Driven & Messaging
Apache ActiveMQ, Apache Camel, JMS, Kafka (Pub/Sub), Kafka Streams, Confluent, IBM MQ, Avro messaging schemas, Pub/Sub messaging, Streaming architectures, HL7 V2/V3, HL7-to-JSON conversion

### DevSecOps & CI/CD
GitLab CI/CD, Jenkins, Tekton, ArgoCD, Helm, GitOps, Maven, Gradle, SonarQube, Fortify, Splunk, JFrog Artifactory, Git, Bitbucket, Jira, OpenTelemetry

### Data Integration
RESTful APIs, SOAP, SOAP-to-REST Migration, HL7 (V2/V3), JSON, XML, EDI X12, SFTP → Redshift ingestion

### Databases & Caching
Oracle, Amazon Redshift, PostgreSQL, MySQL, Redis, ElastiCache, RocksDB (Kafka Streams State Store), SAP SQL

### Security & Compliance
RMF, NIST 800-171, NIST 800-53, DISA STIGs, HIPAA, IAM, CNSS 4011-4016 Information Assurance

### Agile & Practices
Scrum, Kanban, Sprint Planning, Backlog Refinement, Code Reviews, Agile Release Train (ART)

### Tools & IDEs
DevSpaces, Visual Studio, Claude.ai, Atlassian suite (Jira, Bitbucket, Confluence)

---

## Master Experience Bullets (All Sources Combined)

### Trilogy Innovations LLC — Software Engineer
**March 2026 – June 2026 | Remote**

- Architected a Central Messaging System for law enforcement, facilitating real-time data exchange between agencies to verify stolen items, vehicles, missing persons, and criminal records.
- Engineered high-concurrency workflows using Java 21 Virtual Threads, Spring Boot, and Kafka (Pub/Sub) with Avro messaging schemas to orchestrate complex data routing between internal Persons and Property teams.
- The system acted as the messaging control hub: received requests from law enforcement, routed them to the Persons team and Property team to check their respective records, waited for responses, consolidated the results, and sent them back to the original requestor.
- Optimized data persistence and caching: leveraged Redis and ElastiCache for high-speed message handling, utilizing PostgreSQL for reliable backup storage.
- Modernized development operations: managed containerized deployments on Kubernetes/OpenShift on AWS using Tekton pipelines, ArgoCD, Helm charts, and JFrog Artifactory for secure container storage.
- Used Confluent, IBM MQ, OpenTelemetry, and DevSpaces with Visual Studio for rapid development and observability.
- Conducted code reviews and management via Atlassian products (Jira, Bitbucket, Confluence).
- Used Claude.ai as a development aid.
- Technical leadership and quality assurance: conducted a comprehensive audit of legacy code inherited from a previous contractor; collaborated with the team to implement Lombok @NonNull annotations to systematically eliminate NullPointerExceptions (NPEs) while maintaining minimal boilerplate (team was already using Lombok for boilerplate reduction).

---

### North Stone LLC — Lead Java Software Engineer
**March 1, 2025 – July 3, 2025 | Remote**

- Migrated legacy Defense Health Agency (DHA) systems to AWS GovCloud Spring Boot microservices with circuit-breaker patterns, reducing service downtime by 50% and achieving 99.9% availability.
- Re-engineered the Periodic Health Assessment (PHA) backend using Spring Boot microservices.
- Designed secure cross-domain data exchange using custom SQL-proxy microservices, processing 1M+ DMDC personnel records with zero data loss while maintaining NIST 800-53 compliance.
- Consolidated disparate DMDC personnel and medical readiness data, achieving 99.9% synchronization accuracy.
- Implemented custom SQL-proxy microservices for secure cross-domain data exchange, ensuring 100% compliance with DISA STIGs and RMF controls.

---

### DDC Dine — Lead Java Software Engineer
**April 1, 2024 – February 28, 2025 | Remote**

- Resolved ~35% of all available bugs out of a team of 9 developers, significantly increasing application stability and sprint velocity.
- Engineered an advanced stateful deduplication mechanism using Kafka Streams State Store (RocksDB) to process data between the Personal team and Pros team on the consumer side.
- Eliminated the need for external databases (like Redis) for deduplication by using Kafka Streams' built-in state stores with windowing, while successfully navigating complex logic involving primary key synchronization with a legacy backup database (only certain keys were treated as primary keys).
- Built event-driven HL7-to-JSON conversion service using Pub/Sub messaging for Navy Medical Online (NMO), reducing data-delivery latency by 35%.
- Deployed containerized microservices on Kubernetes with GitOps workflows via GitLab CI/CD.

---

### Spinsys Dine LLC — Software Engineer
**December 1, 2023 – March 31, 2024 | Remote**

- Automated SFTP → Amazon Redshift ingestion for Hearing Center of Excellence, increasing daily throughput by 60% while maintaining 100% data integrity.
- Collaborated with Agile Release Train (ART) to troubleshoot system issues, reducing mean-time-to-resolution (MTTR) by 40%.

---

### SpinSys LLC — Software Engineer
**July 6, 2021 – November 30, 2023 | Remote**

- Led migration of legacy systems to AWS GovCloud using Spring Boot and microservices architecture.
- Managed high-availability infrastructure while maintaining rigorous security standards for defense contracts.
- Designed RESTful HL7-to-JSON conversion pipeline for Navy Medical Online (NMO), cutting data delivery latency by 35%.

---

### Media Technologies — SAP Java Developer
**March 2019 – April 2020 | Shelby, MI**

- Developed a custom Warehouse Management System (WMS) using Java and SAP SQL, improving inventory accuracy by 40% through barcode scanning and real-time data synchronization.
- Built custom WMS barcoding and label-generation system using Java, SAP SQL, and Jasper Reports.
- Optimized database queries and application performance, reducing transaction processing time by 30% during peak warehouse operations.
- Optimized real-time warehouse operations using event-driven patterns.

---

### York Worldwide Technologies — EDI Support Specialist
**May 2018 – March 2019 | Spring Lake, MI**

- Managed high-availability EDI translation workflows for ANSI X12 healthcare transactions, processing 500K+ transactions monthly with 99.95% success rate.
- Migrated infrastructure to cloud platform, increasing transaction throughput by 25% while implementing disaster recovery procedures.
- Implemented high-availability ANSI X12 transaction workflows with Pub/Sub integration.

---

### MasterTag — IT Support Technician / Web Developer (also listed as IT Infrastructure & SharePoint Administrator)
**December 2016 – May 2018 | Montague/Whitehall, MI**

- Developed and maintained the company intranet site using React, HTML/CSS, and JavaScript to improve internal communication and resource accessibility.
- Administered Microsoft Active Directory and managed physical servers, handling user accounts, permissions, and group policies.
- Supported network infrastructure including cable patching, connectivity troubleshooting, and VoIP system maintenance.
- Delivered help desk support across the organization, resolving hardware, software, and network issues for end users.
- Administered on-premises and cloud-based SharePoint systems for 150+ users, achieving 99% uptime.
- Created, configured, and deployed custom .NET applications to support internal business workflows and intranet functionality.

---

### Gordon Food Service (GFS) — Java Software Engineer
**March 2015 – December 2016 | Wyoming, MI**

- Enhanced mission-critical Java/Oracle Warehouse Management System (WMS) serving 1,000+ distribution center users, improving pick accuracy by 25% through performance optimization.
- Led DevSecOps pipeline implementation with Jenkins and SonarQube, reducing production defects by 30% and establishing automated quality gates.
- Introduced automated testing frameworks (JUnit), increasing test coverage from 40% to 85%.
- Actively participated in sprint planning, backlog refinement, and code reviews.
- Created, configured, and deployed custom .NET applications to support warehouse operations and internal tooling.

---

### IBM — Java Developer / DevSecOps Engineer
**January 2012 – March 2015 | Lansing, MI**

- Created/Architected shell-scripted Jenkins CI/CD pipelines (Git/Bitbucket), reducing deployment time from 40 minutes to 10 minutes (75–85% improvement) across 15+ applications.
- Migrated monolithic applications to AWS EC2 and Elastic Beanstalk, improving scalability by 40% and reducing infrastructure costs by $50K annually.
- Built automated test frameworks using JUnit and Selenium, increasing code coverage by 45% and catching 90% of bugs in pre-production.
- Developed Splunk dashboards and operational reports for the Coca-Cola account, enabling real-time DevSecOps monitoring across 15+ applications and reducing mean-time-to-detect (MTTD) for production incidents by 60%.

---

### U.S. Army — Squad Leader, Airborne Infantry
**July 1995 – October 2000 | Fort Bragg, NC**

- Led a 9-person infantry squad in high-tempo operations, maintaining 100% mission readiness and zero safety incidents.
- Managed personnel, equipment, and training for rapid-deployment missions, developing leadership and crisis management skills transferable to technical project leadership.
- Maintained 100% accountability of personnel and mission-critical equipment.

---

## Career Gap Explanations

| Gap Period | Duration | Explanation |
|-------------|----------|--------------|
| Dec 2016 – May 2018 | ~17 months | Employed at MasterTag (see above) |
| Apr 2020 – Jul 2021 | ~15 months | Laid off as non-essential due to COVID-19; secured next role by July 2021 |

---

## Education

| Degree | Institution | Honors |
|--------|-------------|--------|
| A.A.S. Programming | Muskegon Community College | — |
| M.S. Information Systems Management | Ferris State University | Magna Cum Laude |
| B.S. Computer Information Systems | Ferris State University | Cum Laude |

---

## Certifications & Clearance

| Credential | Status |
|-------------|--------|
| Active DoD Secret Clearance (Tier 3) | Issued 2022, Current |
| NSA/DoD Information Assurance (CNSS 4011-4016) | Active |
| AWS Certified Developer – Associate | Expired 2024; Renewal in Progress |
| CompTIA Security+ CE (DoD 8570 aligned) | In Progress |

---

## Key Metrics Bank (Quick Reference)

| Metric | Context |
|--------|---------|
| 50% downtime reduction | DHA PHA microservices migration |
| 99.9% availability | DHA systems / DMDC synchronization |
| 60% throughput increase | SFTP → Redshift ingestion (Hearing Center of Excellence) |
| 35% latency reduction | HL7-to-JSON / Navy Medical Online |
| 40% MTTR reduction | Agile Release Train collaboration |
| 1M+ records, zero loss | SQL-proxy cross-domain data exchange |
| 35% of all bugs resolved | DDC Dine (team of 9 developers) |
| 40% inventory accuracy improvement | Media Technologies WMS |
| 30% transaction time reduction | Media Technologies |
| 500K+ transactions/month, 99.95% success | York Worldwide EDI |
| 25% throughput increase | York Worldwide cloud migration |
| 25% pick accuracy improvement | GFS WMS |
| 30% production defect reduction | GFS DevSecOps |
| 40% → 85% test coverage increase | GFS automated testing |
| 75–85% deployment time reduction | IBM Jenkins pipelines (40min → 10min) |
| 40% scalability improvement | IBM AWS migration |
| $50K annual cost reduction | IBM infrastructure |
| 45% code coverage increase, 90% bugs caught | IBM test frameworks |
| 60% MTTD reduction | IBM Splunk dashboards (Coca-Cola account) |
| 100% mission readiness, zero incidents | U.S. Army |
| 99% uptime for 150+ users | MasterTag SharePoint |

---

## Complete Timeline

| # | Role | Company | Dates |
|---|------|---------|-------|
| 1 | Software Engineer | Trilogy Innovations LLC | Mar 2026 – Jun 2026 |
| 2 | Lead Java Software Engineer | North Stone LLC | Mar 2025 – Jul 2025 |
| 3 | Lead Java Software Engineer | DDC Dine | Apr 2024 – Feb 2025 |
| 4 | Software Engineer | Spinsys Dine LLC | Dec 2023 – Mar 2024 |
| 5 | Software Engineer | SpinSys LLC | Jul 2021 – Nov 2023 |
| 6 | SAP Java Developer | Media Technologies | Mar 2019 – Apr 2020 |
| 7 | EDI Support Specialist | York Worldwide Technologies | May 2018 – Mar 2019 |
| 8 | IT Support Technician / Web Developer | MasterTag | Dec 2016 – May 2018 |
| 9 | Java Software Engineer | Gordon Food Service (GFS) | Mar 2015 – Dec 2016 |
| 10 | Java Developer / DevSecOps Engineer | IBM | Jan 2012 – Mar 2015 |
| 11 | Squad Leader | U.S. Army, Airborne Infantry | Jul 1995 – Oct 2000 |

---

## ⚠️ Known Discrepancy

The existing resume documents list the MasterTag title as **"IT Infrastructure & SharePoint Administrator"** with SharePoint as a key responsibility. In conversation, the role was described as **"IT Support Technician / Web Developer"** with intranet frontend work. Both variants are preserved above — choose the most appropriate title and focus when customizing for a specific role.
