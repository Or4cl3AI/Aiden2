# Aiden 2 API Documentation

This document provides a detailed overview of the APIs used in the Aiden 2 application.

## AidenService.ts

This service handles the logic related to Aiden 2.

### processInput(input: string): Promise<AidenResponse>

This method takes a string input and returns a Promise that resolves with an AidenResponse. It sends the input to Aiden 2 for processing and returns the response.

## AidenUtils.ts

This file contains utility functions used across the application.

### formatResponse(response: AidenResponse): string

This method takes an AidenResponse and formats it into a string for display in the user interface.

## AidenComponent.tsx

This is the main component of the application. It interacts with the AidenService and displays the responses from Aiden 2.

### handleUserInput(event: React.FormEvent<HTMLInputElement>): void

This method is triggered when the user submits an input. It takes the input, sends it to the AidenService for processing, and updates the state with the response.

## AidenTypes.ts

This file contains type definitions used across the application.

### AidenResponse

This type represents a response from Aiden 2. It includes the response text and any additional data returned by Aiden 2.

## Note

The APIs described above are internal to the application and are not exposed as public APIs. They are used to facilitate communication between the user interface and Aiden 2.