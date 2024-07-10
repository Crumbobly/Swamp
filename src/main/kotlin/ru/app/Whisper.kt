package ru.app


import org.http4k.cloudnative.env.EnvironmentKey
import org.http4k.core.*
import org.http4k.lens.secret
import org.http4k.server.Netty
import org.http4k.server.asServer
import ru.app.config.AppConfig
import ru.app.database.DatabaseFactory
import ru.app.database.DatabaseFunc
import ru.lab1.web.templates.ContextAwarePebbleTemplates
import ru.lab1.web.templates.ContextAwareViewRender


fun main() {

    // Конфигурация приложения
    val env = AppConfig().readConfiguration()
    val dbURL = EnvironmentKey.required("database.url")
    val dbDriver = EnvironmentKey.required("database.driver")
    val dbRole = EnvironmentKey.required("database.user.role")
    val dbPassword = EnvironmentKey.secret().required("database.user.password")
    val securityConfig = EnvironmentKey.secret().required("security.salt")


    // база данных
    DatabaseFactory.init(
        dbURL(env),
        dbDriver(env),
        dbRole(env),
        dbPassword(env)
    )

    DatabaseFunc().addUser("login1", "email1", "password1")


    val templates = ContextAwarePebbleTemplates().HotReload("src/main/resources")
    val htmlView = ContextAwareViewRender.withContentType(templates, ContentType.TEXT_HTML)

    val routers = ru.app.routers.Router().router(htmlView)
    val printingApp: HttpHandler = routers

    val port = 5000
    val server = printingApp.asServer(Netty(port)).start()

    println("http://localhost:$port")
}
