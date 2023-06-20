FROM eclipse-temurin:20.0.1_9-jdk as build

EXPOSE 8080

WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

COPY src src
RUN ./mvnw install -DskipTests
RUN rm src/main/resources/application.yml
RUN ./mvnw package -DskipTests


FROM eclipse-temurin:20.0.1_9-jre-jammy

COPY --from=build /workspace/app/target/server*.jar .
COPY src/main/resources/application-docker.yml application-docker.yml

ENV spring_profiles_active=docker

ENTRYPOINT java -jar server*.jar
#ENTRYPOINT sleep 10000