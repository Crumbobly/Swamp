package ru.app

import org.http4k.core.*
import org.http4k.routing.ResourceLoader
import org.http4k.routing.bind
import org.http4k.routing.routes
import org.http4k.routing.static
import org.http4k.server.Netty
import org.http4k.server.asServer
import java.io.File
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Paths


fun main() {

//    // Конфигурация приложения
//    val env = AppConfig().readConfiguration()
//    val dbURL = EnvironmentKey.required("database.url")
//    val dbDriver = EnvironmentKey.required("database.driver")
//    val dbRole = EnvironmentKey.required("database.user.role")
//    val dbPassword = EnvironmentKey.secret().required("database.user.password")
//    val securityConfig = EnvironmentKey.secret().required("security.salt")
//
//
//    // база данных
//    DatabaseFactory.init(
//        dbURL(env),
//        dbDriver(env),
//        dbRole(env),
//        dbPassword(env)
//    )
//
////    DatabaseFunc().addUser("login1", "email1", "password1")
//
//
//    val templates = ContextAwarePebbleTemplates().HotReload("src/main/resources")
//    val htmlView = ContextAwareViewRender.withContentType(templates, ContentType.TEXT_HTML)
//
//    val routers = ru.app.routers.Router().router(htmlView)
//    val printingApp: HttpHandler = routers
//
//    val port = 5000
//    val server = printingApp.asServer(Netty(port)).start()
//
//    println("http://localhost:$port")

    fun serveStaticFile(filePath: String): HttpHandler = { request: Request ->
        val path = Paths.get(filePath)
        if (Files.exists(path) && !Files.isDirectory(path)) {
            Response(Status.OK).body(Files.readString(path))
        } else {
            Response(Status.NOT_FOUND)
        }
    }

//    val app = routes(
//        "/redirect" bind Method.GET to { Response(Status.OK).body("test") },
//        "/api/data" bind Method.POST to { Response(Status.FOUND).header("Location", "/redirect")},
//        "/" bind Method.GET to serveStaticFile("../frontend/build/index.html"),
//        "/static/{}" bind Method.GET to staticHttpHandler(),
//    )
//

    val a = routes(
        "/" bind Method.GET to serveStaticFile("../frontend/build/index.html"),
        static(ResourceLoader.Directory("../frontend/build"))
    )

    val app: HttpHandler = { request: Request ->
        when {
            request.uri.path == "/redirect" -> Response(Status.OK).body("<div>13</div>")
            request.uri.path == "/api/data" && request.method==Method.POST -> Response(Status.FOUND).header("Location", "/redirect")
            request.uri.path == "/" -> serveStaticFile("../frontend/build/index.html")(request)
            request.uri.path.startsWith("/static/") -> serveStaticFile("../frontend/build${request.uri.path}")(request)
            else -> Response(Status.NOT_FOUND)
        }
    }

    a.asServer(Netty(8080)).start()
    println("http://localhost:8080/")
}
