import { Observable, Subject } from "rxjs";

class GainersServiceClass {
    private subject: Subject<void> = new Subject<void>();

    observable(): Observable<void> {
        return this.subject;
    }

    publish(): void {
        this.subject.next();
    }
}

export const GainersService = new GainersServiceClass();