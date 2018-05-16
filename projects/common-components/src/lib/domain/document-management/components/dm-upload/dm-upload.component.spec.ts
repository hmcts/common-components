import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DmUploadComponent} from './dm-upload.component';
import {DebugElement} from '@angular/core';
import {DocumentStoreService} from '../../services/document-store/document-store.service';

describe('DmUploadComponent', () => {
  const jwt = '12345';

  const configObject = {
    'dm_store_app_local_endpoint': '/demproxy/dm/',
    'dm_upload_url': '/demproxy/dm/documents'
  };

  let httpMock: HttpTestingController;
  let component: DmUploadComponent;
  let fixture: ComponentFixture<DmUploadComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DmUploadComponent],
      providers: [DocumentStoreService]
    })
      .compileComponents();
  }));

  describe('With JWT', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DmUploadComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      httpMock = TestBed.get(HttpTestingController);
      fixture.detectChanges();
    });

    it('document upload header is here', () => {
      expect(element.nativeElement.querySelector('h1.heading-large').textContent)
        .toContain('Upload Document');
    });

    // describe('when I click cancel', () => {
    //   beforeEach(async(() => {
    //     windowService = TestBed.get(WindowService);
    //     spyOn(windowService, 'locationAssign').and.callFake(() => {});
    //     element.nativeElement.querySelector('button[data-hook="dm-upload__cancel-button"]').click();
    //   }));
    //
    //   it('should goto listView', () => {
    //     expect(windowService.locationAssign)
    //       .toHaveBeenCalledWith('/list');
    //   });
    //
    // });

    describe('when I choose a file', () => {
      // https://stackoverflow.com/questions/24488985/how-to-mock-file-in-javascript
      const blob = new Blob([''], { type: 'image/jpeg' });
      blob['name'] = 'test.jpg';
      blob['lastModifiedDate'] = '';
      const f: File = <File>blob;

      beforeEach(async(() => {
        component.handleFileInput(f);
      }));

      it('should set file upload', () => {
        expect(component.fileToUpload).toEqual(f);
      });

      it('should be no error message', () => {
        expect(element.nativeElement.querySelector('.error-summary')).toBeFalsy();
      });

      // 200
      describe('When I choose to upload file and is 200 successful', () => {
        beforeEach(() => {
          // windowService = TestBed.get(WindowService);
          // spyOn(windowService, 'locationAssign').and.callFake(() => {});
          element.nativeElement.querySelector('button[data-hook="dm-upload__upload-button"]').click();
          httpMock.expectOne('/demproxy/dm/documents').flush({}, {
            status: 200,
            statusText: 'ok'
          });
        });

        // it('should goto listView', () => {
        //   expect(windowService.locationAssign)
        //     .toHaveBeenCalledWith('/list');
        // });
      });

      // 401
      describe('When I choose to upload file and is 401 unsuccessful', () => {
        beforeEach(() => {
          // windowService = TestBed.get(WindowService);
          element.nativeElement.querySelector('button[data-hook="dm-upload__upload-button"]').click();
          httpMock.expectOne('/demproxy/dm/documents').flush({}, {
            status: 401,
            statusText: 'unAuth'
          });
          fixture.detectChanges();
        });
      });

      // 403
      describe('When I choose to upload file and is 403 successful', () => {
        beforeEach(() => {
          // windowService = TestBed.get(WindowService);
          // spyOn(windowService, 'locationAssign').and.callFake(() => {});
          element.nativeElement.querySelector('button[data-hook="dm-upload__upload-button"]').click();
          httpMock.expectOne('/demproxy/dm/documents').flush({}, {
            status: 403,
            statusText: 'forbid'
          });
          fixture.detectChanges();
        });

        it('should display an error with the status', () => {
          expect(element.nativeElement.querySelector('.error-summary').textContent)
            .toContain('Response status was 403.');
        });
      });

    });

    describe('when I have not choose a file', () => {
      beforeEach(async(() => {
        component.fileToUpload = null;
        fixture.whenStable().then(() => fixture.detectChanges());
      }));

      describe('When I choose to upload no file', () => {
        beforeEach(async(() => {
          component.uploadDocument();
          fixture.whenStable().then(() => fixture.detectChanges());
        }));

        it('should display an error', () => {
          expect(element.nativeElement.querySelector('.error-summary').textContent)
            .toContain('You have not selected a file for upload.');
        });
      });
    });
  });

});
