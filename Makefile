run:
	@make -j 3 tailwindcss vite air

vite:
	@npm run dev

air:
	@air

tailwindcss:
	@npx tailwindcss -i ./frontend/src/assets/input.css -o ./frontend/src/assets/output.css --watch