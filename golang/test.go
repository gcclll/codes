













package main

import "fmt"

// main
func main() {
	
}

type error interface {
	Error() string
}

func Sqrt(f float64) (float64, error) {
	if f < 0 {
		return 0, errors.New("error")
	}
}
