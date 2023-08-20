// AidenUtils.ts

export const formatResponse = (response: any): string => {
    // Format the response from Aiden 2 for display in the UI
    return JSON.stringify(response, null, 2);
};

export const validateInput = (input: string): boolean => {
    // Validate the user input before sending it to Aiden 2
    return input.trim().length > 0;
};

export const handleError = (error: Error): void => {
    // Handle any errors that occur when interacting with Aiden 2
    console.error(`An error occurred: ${error.message}`);
};