// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
const RELEASE = '1.0.0'

Sentry.init({ 
    dsn: 'https://3db83a93652f45c8814854a9e8259efb@sentry.io/1386860',
    release: RELEASE,
    beforeSend(event) {
        // Check if it is an exception, if so, show the report dialog
        if (event.exception) {
          Sentry.showReportDialog({
              'title': 'Ups! Algo no ha salido bien...'
          })
        }
        return event;
    }
});