package main

import (
	"database/sql"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type User struct {
	ID        int       `json:"id"`
	Username  string    `json:"username"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func loginHandler(c *gin.Context) {
	var req struct {
		Username string `json:"username" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user User
	err := db.QueryRow(`
		SELECT id, username, created_at, updated_at 
		FROM users 
		WHERE username = $1
	`, req.Username).Scan(&user.ID, &user.Username, &user.CreatedAt, &user.UpdatedAt)

	if err == sql.ErrNoRows {
		err = db.QueryRow(`
			INSERT INTO users (username) 
			VALUES ($1) 
			RETURNING id, username, created_at, updated_at
		`, req.Username).Scan(&user.ID, &user.Username, &user.CreatedAt, &user.UpdatedAt)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
			return
		}
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Login successful",
		"user":    user,
	})
}
