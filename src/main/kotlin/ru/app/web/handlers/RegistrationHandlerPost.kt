package ru.app.web.handlers

import org.http4k.core.*
import org.http4k.core.body.form

class RegistrationHandlerPost : HttpHandler {
    override fun invoke(request: Request): Response {

        val form = request.form()

        val login = form.findSingle("login")
        val password = form.findSingle("password")

        println(login)
        return Response.invoke(Status.CREATED).header("Location", "/")
    }

}