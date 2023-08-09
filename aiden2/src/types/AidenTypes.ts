```typescript
export interface AidenResponse {
  message: string;
  action: string;
  data: any;
}

export interface AidenRequest {
  command: string;
  parameters: any;
}

export interface AidenComponentState {
  userInput: string;
  aidenOutput: AidenResponse[];
}

export interface AidenComponentProps {
  aidenService: any;
}
```