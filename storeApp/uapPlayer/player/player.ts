/// <reference path="../typings/playerframework/playerframework.d.ts" />

module UapPlayer {

    console.log('loaded');

    export class Player {

        private mediaPlayerControl: PlayerFramework.MediaPlayer;

        constructor(
            private targetElement: HTMLElement) {

            //let w = window as any;
            //let o = {
            //    url: 'http://mediadl.microsoft.com/mediadl/iisnet/smoothmedia/Experience/BigBuckBunny_720p.ism/Manifest'
            //}
            //w.WinJS.xhr(o).then((r) => {
            //    debugger;
            //}, (e) => {
            //    debugger;
            //});

            let options = {
                autoplay: true,
                isFullScreenVisible: true
            };

            this.mediaPlayerControl = new PlayerFramework.MediaPlayer(targetElement, options);

            this.mediaPlayerControl.addEventListener("error", (e: any) => {
                var error = e.detail.error;
                var message = PlayerFramework.Utilities.getMediaErrorMessage(error);
                var extendedCode = PlayerFramework.Utilities.convertDecimalToHex(error.msExtendedCode);

                if (extendedCode === "0x80004002") {
                    // cancel any non-critical errors to prevent them from interrupting the player
                    e.detail.canceled = true;
                    console.warn(message);
                } else {
                    // otherwise, allow the player to enter the failed state and display the error UI
                    console.error(message);
                }
            });
        }

        public play(manifestUri: string): void {
            this.mediaPlayerControl.src = manifestUri;
            this.mediaPlayerControl.element.focus();
        }

        public dispose(): void {
            if (this.mediaPlayerControl) {
                this.mediaPlayerControl.dispose();
                this.mediaPlayerControl = null;
            }
        }
    }
}