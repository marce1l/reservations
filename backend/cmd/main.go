package main

import (
	"fmt"

	"github.com/miketsu-inc/reservations/backend/cmd/server"
)

func main() {
	server := server.NewServer()

	err := server.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
