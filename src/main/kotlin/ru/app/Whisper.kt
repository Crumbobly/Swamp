package ru.app


import org.http4k.core.*
import org.http4k.server.Netty
import org.http4k.server.asServer
import ru.lab1.web.templates.ContextAwarePebbleTemplates
import ru.lab1.web.templates.ContextAwareViewRender




fun main() {

    val templates = ContextAwarePebbleTemplates().HotReload("src/main/resources")
    val htmlView = ContextAwareViewRender.withContentType(templates, ContentType.TEXT_HTML)

    val routers = ru.app.routers.Router().router(htmlView)
    val printingApp: HttpHandler = routers

    val port = 5000
    val server = printingApp.asServer(Netty(port)).start()

    println("http://localhost:$port")
}
