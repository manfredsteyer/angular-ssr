export abstract class EnvService {
    abstract get env(): string;
}

export class ClientEnvService implements EnvService {
    get env(): string {
        return "Client!";
    }
}

export class ServerEnvService implements EnvService {
    get env(): string {
        return "Server!";
    }
}