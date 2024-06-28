
FROM gradle:8.5.0-jdk21 AS build
COPY . /home/gradle/project
WORKDIR /home/gradle/project
RUN ./gradlew shadowJar

FROM openjdk:21
COPY --from=build /home/gradle/project/build/libs/Whisper.jar /app/Whisper.jar

WORKDIR /app
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-Djava.security.egd=file:/dev/./urandom","-jar","/app/Whisper.jar"]
