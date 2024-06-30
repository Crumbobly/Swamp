package ru.app.routers

import org.http4k.core.Method
import org.http4k.routing.ResourceLoader
import org.http4k.routing.bind
import org.http4k.routing.routes
import org.http4k.routing.static
import ru.app.web.handlers.WelcomePageHandler
import ru.lab1.web.templates.ContextAwareViewRender

class Router {

    fun router(htmlView: ContextAwareViewRender) = routes(
        "/" bind Method.GET to WelcomePageHandler(htmlView),
        static(ResourceLoader.Classpath("/ru/app/public")),
        )

}