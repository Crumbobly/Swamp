package ru.app.config

import org.http4k.cloudnative.env.Environment


class AppConfig() {

    private val appEnv =
        Environment.fromResource("/ru/app/config/app.properties") overrides
                Environment.JVM_PROPERTIES overrides
                Environment.ENV

    fun readConfiguration(): Environment {
        return appEnv
    }
}
