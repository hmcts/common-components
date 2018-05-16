import { DocumentManagementModule } from './document-management.module';

describe('DocumentManagementModule', () => {
    let caseViewerModule: DocumentManagementModule;

    beforeEach(() => {
        caseViewerModule = new DocumentManagementModule();
    });

    it('should create an instance', () => {
        expect(caseViewerModule).toBeTruthy();
    });
});
