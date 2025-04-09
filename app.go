package main

import (
	"context"
	"encoding/json"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

// Struct for taking description
type Notes struct {
	Title string    `json:"title"`
	Desc string		`json:"desc"`
}

var notes []Notes

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SaveNotesToDisk(node Notes) {
	notes = append(notes, node)
	data, _ := json.MarshalIndent(notes, "", "")
	_ = os.WriteFile("notes.json", data, 0644)
}
