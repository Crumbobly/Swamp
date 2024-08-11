package ru.app.database

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.http4k.cloudnative.env.Secret
import org.jetbrains.exposed.sql.Database

object DatabaseFactory {

    fun init(url: String, driver: String, username: String, password: Secret) {

        password.use { dbPassword ->
            val config = HikariConfig().apply {
                this.jdbcUrl = url
                this.driverClassName = driver
                this.username = username
                this.password = dbPassword
                this.maximumPoolSize = 10
            }
            val dataSource = HikariDataSource(config)
            Database.connect(dataSource)
        }

    }

}