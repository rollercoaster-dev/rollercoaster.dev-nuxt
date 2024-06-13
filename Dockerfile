# Use the official Bun image as the base image
FROM jarredsumner/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and bun.lockb files to the working directory
COPY package.json bun.lockb ./

# Install the dependencies using Bun
RUN bun install

# Copy the entire project directory to the working directory
COPY . .

# Build the Nuxt application using Bun
RUN bun run build

# Expose the port on which the Nuxt application will run (default is 3000)
EXPOSE 3000

# Set the command to run the Nuxt application using Bun
CMD ["bun", "run", "start"]