package database

import (
	"context"

	"github.com/google/uuid"
)

type User struct {
	Id             uuid.UUID       `json:"ID"`
	FirstName      string          `json:"first_name"`
	LastName       string          `json:"last_name"`
	Email          string          `json:"email"`
	Phonenumber    string          `json:"phone_number"`
	PasswordHash   string          `json:"password_hash"`
	SubscriptionId int             `json:"subscription_id"`
	Settings       map[string]bool `json:"settings"`
}

func (s *service) NewUser(ctx context.Context, user User) error {
	query := `
	insert into "User" (id, first_name, last_name, email, phone_number, password_hash, subscription, settings)
	values ($1, $2, $3, $4, $5, $6, $7, $8)
	`

	_, err := s.db.ExecContext(ctx, query, user.Id, user.FirstName, user.LastName, user.Email, user.Phonenumber, user.PasswordHash, user.SubscriptionId, user.Settings)
	if err != nil {
		return err
	}

	return nil
}

func (s *service) GetUserById(ctx context.Context, user_id uuid.UUID) (User, error) {
	query := `
	select * from "User"
	where id = $1
	`

	var user User
	err := s.db.QueryRowContext(ctx, query, user_id).Scan(&user.Id, &user.FirstName, &user.LastName, &user.Email, &user.Phonenumber, &user.PasswordHash, &user.SubscriptionId, &user.Settings)
	if err != nil {
		return User{}, err
	}

	return user, nil
}

func (s *service) GetUserPasswordByUserEmail(ctx context.Context, email string) (string, error) {
	query := `
	select password_hash from "User"
	where email = $1
	`

	var password string
	err := s.db.QueryRowContext(ctx, query, email).Scan(&password)
	if err != nil {
		return "", err
	}

	return password, nil
}
