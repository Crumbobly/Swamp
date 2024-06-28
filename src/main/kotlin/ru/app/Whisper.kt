package ru.app


import org.http4k.core.*
import org.http4k.core.ContentType.Companion.TEXT_HTML
import org.http4k.core.Method.GET
import org.http4k.core.Status.Companion.OK
import org.http4k.filter.DebuggingFilters.PrintRequest
import org.http4k.routing.bind
import org.http4k.routing.routes
import org.http4k.server.Netty
import org.http4k.server.asServer
import org.http4k.template.PebbleTemplates
import org.http4k.template.viewModel
import ru.app.models.PebbleViewModel

val app: HttpHandler = routes(

    "/" bind Method.GET to   {
        Response(OK).body("main")
    },

    "/ping" bind GET to {
        Response(OK).body("pong")
    },


    "/templates/pebble" bind GET to {
        val renderer = PebbleTemplates().CachingClasspath()
        val view = Body.viewModel(renderer, TEXT_HTML).toLens()
        val viewModel = PebbleViewModel("Hello there!")
        Response(OK).with(view of viewModel)
    },

    "/testing/kotest" bind GET to {request ->
        Response(OK).body("Echo '${request.bodyString()}'")
    }
)

fun main() {
    val printingApp: HttpHandler = PrintRequest().then(app)

    val server = printingApp.asServer(Netty(8080)).start()

    println("Server started on " + server.port())
}
