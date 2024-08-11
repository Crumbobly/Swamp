import com.github.gradle.node.npm.task.NpmTask

// Список плагинов
plugins {
    id("com.github.node-gradle.node") version "7.0.2"
}

// Настройки плагина, который мы установили выше.
// Тут указана версии npm и node, а также включена их автоматическая установка в случае, если они не установлены.
// Проверить текущие версии можно с помощью команд "npm -v" и "node -v" в терминале.
node {
    version.set("20.16.0")
    npmVersion.set("10.8.1")
    download.set(true)
}

// Запускаем: frontend:buildFrontend для сборки этого проекта
tasks.register<NpmTask>("buildFrontend") {
    dependsOn("npmInstall")
    args.set(listOf("run", "build"))
}

// Запускаем: frontend:startFrontend для запуска этого проекта
tasks.register<NpmTask>("startFrontend") {
    dependsOn("npmInstall")
    args.set(listOf("start"))
}