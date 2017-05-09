import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {upload} from '../../../../../both/methods/images.methods';

import {Subject, Subscription, Observable} from "rxjs";
import {MeteorObservable} from "meteor-rxjs";

import {Thumb} from "../../../../../both/models/image.model";
import {Thumbs} from "../../../../../both/collections/images.collection";

import template from './file-upload.component.html';
import style from './file-upload.component.scss';


@Component({

    selector: 'file-upload',

    template,
    styles: [style]

})

export class FileUploadComponent implements OnInit {
    fileIsOver: boolean = false;
    uploading: boolean = false;
    filesArray: string[] = [];
    files: Subject<string[]> = new Subject<string[]>();
    thumbsSubscription: Subscription;
    thumbs: Observable<Thumb[]>;
    @Output() onFile: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {

        this.files.subscribe((filesArray) => {

            MeteorObservable.autorun().subscribe(() => {

                if (this.thumbsSubscription) {

                    this.thumbsSubscription.unsubscribe();

                    this.thumbsSubscription = undefined;

                }


                this.thumbsSubscription = MeteorObservable.subscribe("thumbs", filesArray).subscribe(() => {

                    this.thumbs = Thumbs.find({

                        originalStore: 'images',

                        originalId: {

                            $in: filesArray

                        }

                    }).zone();

                });

            });

        });

    }

    fileOver(fileIsOver: boolean): void {
        this.fileIsOver = fileIsOver;
    }

    selectedFileOnChanged(file: any): void {

        console.log(file);

        this.uploading = true;
        upload(file).then((result) => {

            this.uploading = false;
            this.addFile(result);

        }).catch((error) => {

            this.uploading = false;
            console.log(`Something went wrong!`, error);

        });
    }

    onFileDrop(file: File): void {
        this.uploading = true;
        upload(file)

            .then((result) => {

                this.uploading = false;
                this.addFile(result);

            })

            .catch((error) => {

                this.uploading = false;

                console.log(`Something went wrong!`, error);

            });
    }

    addFile(file) {

        this.filesArray.push(file._id);
        this.files.next(this.filesArray);
        this.onFile.emit(file._id);

    }

    reset() {

        this.filesArray = [];

        this.files.next(this.filesArray);

    }
}