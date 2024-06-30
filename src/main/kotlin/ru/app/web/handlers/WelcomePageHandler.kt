package ru.app.web.handlers

import org.http4k.core.*
import ru.app.web.models.WelcomePageVM
import ru.lab1.web.templates.ContextAwareViewRender

class WelcomePageHandler(private val htmlView: ContextAwareViewRender) : HttpHandler {
    override fun invoke(request: Request): Response {
        return Response.invoke(Status.OK).with(htmlView(request) of WelcomePageVM())
    }
}