package ru.app.database

import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.transactions.transaction
import ru.app.database.tables.Users

class DatabaseFunc {

    fun addUser(login: String, email: String, password: String): Int {
        return transaction {
            Users.insertAndGetId {
                it[Users.login] = login
                it[Users.email] = email
                it[Users.password] = password
            }.value
        }
    }



}