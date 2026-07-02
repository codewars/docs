---
title: Java
description: Java on Codewars
slug: /languages/java
tags: [java]
---


## Versions

- Java 8: `Oracle-1.8.0_151-b12`
- Java 11: `Oracle-11.0.2+9-Debian-3bpo91`
- Java 17: `Temurin-17.0.18+8`
- Java 21: `Temurin-21.0.10+7`

## Test Frameworks

JUnit (both [JUnit 4](https://junit.org/junit4/) and [JUnit 5](https://junit.org/) are supported)

## Timeout

16 seconds

## Packages

### Guaranteed Packages

The following packages should be available in all current and future runtime versions.

| Package | Java 21 | Java 17 | Java 11 | Java 1.8 |
| - | - | - | - | - |
| junit:junit | 4.13.2 | 4.13.2 | 4.12 | 4.12 |
| org.junit.jupiter:junit-jupiter-api | 5.8.2 | 5.8.2 | 5.4.0 | 5.2.0 |
| org.junit.jupiter:junit-jupiter-engine | 5.8.2 | 5.8.2 | 5.4.0 | 5.2.0 |
| org.junit.vintage:junit-vintage-engine | 5.8.2 | 5.8.2 | 5.4.0 | 5.2.0 |
| net.jqwik:jqwik | 1.6.5 | 1.6.5 | 1.1.0 |  |
| org.mockito:mockito-core | 5.7.0 | 4.4.0 | 2.24.0 | 2.7.19 |
| org.assertj:assertj-core | 3.24.2 | 3.22.0 | 3.11.1 | 3.8.0 |
| org.assertj:assertj-guava | 3.5.0 | 3.4.0 | 3.2.1 | 3.1.0 |
| org.apache.commons:commons-lang3 | 3.14.0 | 3.12.0 | 3.8.1 | 3.6 |
| org.apache.commons:commons-math3 | 3.6.1 | 3.6.1 | 3.6.1 | 3.6.1 |
| com.google.guava:guava | 33.0.0-jre | 31.1-jre | 27.0.1-jre | 20.0 |
| org.jsoup:jsoup | 1.17.2 | 1.14.3 | 1.11.3 | 1.10.3 |
| org.dom4j:dom4j | 2.1.4 | 2.1.3 | 2.1.1 | 2.0.1 |

### Additional Packages

The following packages are available in the respective runtimes, but authors/translators should not rely on their availability in future versions. 

| Package | Java 21 | Java 17 | Java 11 | Java 1.8 |
| - | - | - | - | - |
| apiguardian-api | 1.1.2 | 1.1.2 | 1.0.0 | 1.0.0 |
| byte-buddy | 1.14.9 | 1.12.8 | 1.9.7 | 1.6.11 |
| byte-buddy-agent | 1.14.9 | 1.12.8 | 1.9.7 | 1.6.11 |
| checker-qual | 3.41.0 | 3.12.0 | 2.5.2 |  |
| commons-pool2 | 2.12.0 | 2.11.1 |  |  |
| error_prone_annotations | 2.23.0 | 2.11.0 | 2.2.0 |  |
| failureaccess | 1.0.2 | 1.0.1 | 1.0.1 |  |
| gson | 2.10.1 | 2.8.9 |  |  |
| hamcrest-core | 1.3 | 1.3 | 1.3 | 1.3 |
| jackson-annotations | 2.16.1 | 2.13.2 | 2.9.8 | 2.8.9 |
| jaxb-api | 2.2.12 | 2.2.12 | 2.3.1 |  |
| jaxen | 1.1.6 | 1.1.6 |  | 1.1.6 |
| jedis | 5.1.0 | 4.3.1 |  |  |
| jqwik-api | 1.6.5 | 1.6.5 | 1.1.0 |  |
| jqwik-engine | 1.6.5 | 1.6.5 | 1.1.0 |  |
| jqwik-time | 1.6.5 | 1.6.5 |  |  |
| jqwik-web | 1.6.5 | 1.6.5 |  |  |
| json | 20231013 | 20220320 |  |  |
| jsr305 | 3.0.2 | 3.0.2 | 3.0.2 |  |
| junit-jupiter | 5.8.2 | 5.8.2 |  |  |
| junit-jupiter-params | 5.8.2 | 5.8.2 | 5.4.0 |  |
| junit-platform-commons | 1.8.2 | 1.8.2 | 1.4.0 | 1.2.0 |
| junit-platform-engine | 1.8.2 | 1.8.2 | 1.4.0 | 1.2.0 |
| listenablefuture | 9999.0 | 9999.0 | 9999.0 |  |
| objenesis | 3.3 | 3.2 | 2.6 | 2.5 |
| opentest4j | 1.2.0 | 1.2.0 | 1.1.1 | 1.1.0 |
| pull-parser | 2.1.10 | 2 |  |  |
| relaxngDatatype | 20020414 | 20020414 |  |  |
| slf4j-api | 2.0.11 | 2.0.7 | 1.7.25 | 1.7.25 |
| slf4j-nop | 2.0.11 | 2.0.7 |  |  |
| sqlite-jdbc | 3.44.1.0 | 3.36.0.3 | 3.25.2 | 3.19.3 |
| stax-api | 1.0-2 | 1.0-2 |  |  |
| xpp3 | 1.1.4c | 1.1.4c |  |  |
| xsdlib | 2013.6.1 | 2013.6.1 |  |  |
| net.minidev:accessors-smart |  |  | 1.2 | 1.1 |
| com.vaadin.external.google:android-json |  |  | 0.0.20131108.vaadin1 | 0.0.20131108.vaadin1 |
| animal-sniffer-annotations |  |  | 1.17 |  |
| antlr |  |  | 2.7.7 | 2.7.7 |
| asm |  |  | 5.0.4 | 5.0.3 |
| aspectjweaver |  |  | 1.9.2 |  |
| classmate |  |  | 1.3.4 | 1.3.1 |
| commons-logging |  |  |  | 1.2 |
| evo-inflector |  |  | 1.2.2 | 1.2.2 |
| com.sun.xml.fastinfoset:FastInfoset |  |  | 1.2.15 |  |
| h2 |  |  | 2.1.210 |  |
| hamcrest-library |  |  | 1.3 | 1.3 |
| hibernate-commons-annotations |  |  | 5.1.0.Final | 5.0.1.Final |
| hibernate-core |  |  | 5.4.1.Final | 5.2.10.Final |
| hibernate-jpa-2.1-api |  |  |  | 1.0.0.Final |
| hibernate-validator |  |  | 6.0.14.Final | 5.3.5.Final |
| com.zaxxer:HikariCP |  |  | 3.2.0 |  |
| istack-commons-runtime |  |  | 3.0.7 |  |
| j2objc-annotations |  | 1.3 | 1.1 |  |
| jackson-core |  |  | 2.9.8 | 2.8.9 |
| jackson-databind |  |  | 2.9.8 | 2.8.9 |
| jackson-datatype-jdk8 |  |  | 2.9.8 |  |
| jackson-datatype-jsr310 |  |  | 2.9.8 |  |
| jackson-module-parameter-names |  |  | 2.9.8 |  |
| jandex |  |  | 2.0.5.Final | 2.0.3.Final |
| javassist |  |  | 3.24.0-GA | 3.20.0-GA |
| javax.activation-api |  |  | 1.2.0 |  |
| javax.annotation-api |  |  | 1.3.2 |  |
| javax.persistence-api |  |  | 2.2 |  |
| javax.transaction-api |  |  | 1.3 |  |
| jaxb-runtime |  |  | 2.3.1 |  |
| jboss-logging |  |  | 3.3.2.Final | 3.3.0.Final |
| jboss-transaction-api_1.2_spec |  |  | 1.1.1.Final | 1.0.1.Final |
| jcl-over-slf4j |  |  |  | 1.7.25 |
| json-path |  |  | 2.4.0 | 2.2.0 |
| json-smart |  |  | 2.3 | 2.2.1 |
| jsonassert |  |  | 1.5.0 | 1.4.0 |
| jul-to-slf4j |  |  | 1.7.25 | 1.7.25 |
| junit-platform-launcher |  |  | 1.4.0 | 1.2.0 |
| log4j-api |  |  | 2.11.1 |  |
| log4j-over-slf4j |  |  |  | 1.7.25 |
| log4j-to-slf4j |  |  | 2.11.1 |  |
| logback-classic |  |  | 1.2.3 | 1.1.11 |
| logback-core |  |  | 1.2.3 | 1.1.11 |
| lombok |  |  |  | 1.16.18 |
| mongo-java-driver |  |  | 3.10.1 | 3.4.2 |
| postgresql |  |  | 42.2.5 | 42.1.1 |
| snakeyaml |  |  | 1.23 | 1.17 |
| spring-aop |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-aspects |  |  | 5.1.4.RELEASE |  |
| spring-beans |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-boot |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-autoconfigure |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-aop |  |  | 2.1.2.RELEASE |  |
| spring-boot-starter-data-jpa |  |  | 2.1.2.RELEASE |  |
| spring-boot-starter-data-rest |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-jdbc |  |  | 2.1.2.RELEASE |  |
| spring-boot-starter-json |  |  | 2.1.2.RELEASE |  |
| spring-boot-starter-logging |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-test |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-tomcat |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-validation |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-starter-web |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-test |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-boot-test-autoconfigure |  |  | 2.1.2.RELEASE | 1.5.6.RELEASE |
| spring-context |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-core |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-data-commons |  |  | 2.1.4.RELEASE | 1.13.6.RELEASE |
| spring-data-jpa |  |  | 2.1.4.RELEASE |  |
| spring-data-rest-core |  |  | 3.1.4.RELEASE | 2.6.6.RELEASE |
| spring-data-rest-webmvc |  |  | 3.1.4.RELEASE | 2.6.6.RELEASE |
| spring-expression |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-hateoas |  |  | 0.25.0.RELEASE | 0.23.0.RELEASE |
| spring-jcl |  |  | 5.1.4.RELEASE |  |
| spring-jdbc |  |  | 5.1.4.RELEASE |  |
| spring-orm |  |  | 5.1.4.RELEASE |  |
| spring-plugin-core |  |  | 1.2.0.RELEASE | 1.2.0.RELEASE |
| spring-test |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-tx |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-web |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| spring-webmvc |  |  | 5.1.4.RELEASE | 4.3.10.RELEASE |
| stax-ex |  |  | 1.8 |  |
| tomcat-annotations-api |  |  | 9.0.14 |  |
| tomcat-embed-core |  |  | 9.0.14 | 8.5.16 |
| tomcat-embed-el |  |  | 9.0.14 | 8.5.16 |
| tomcat-embed-websocket |  |  | 9.0.14 | 8.5.16 |
| txw2 |  |  | 2.3.1 |  |
| validation-api |  |  | 2.0.1.Final | 1.1.0.Final |
| xmlunit-core |  |  | 2.6.2 |  |

## Services

None

## Language ID

`java`
