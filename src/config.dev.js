import { Session, Connection } from '@myie/interact'

// set global local to current browser language


const Config = function () {
    const set = function () {
        Connection.config(
            window.location.protocol + '//' + window.location.hostname + ':3000',
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-brand-code': 'Clean',
                'x-channel-type': 'WEB',
                'x-device-type': 'WEB',
                'x-client-version': '5.2',
                'x-device-language': 'en-gb',
                "x-session-ticket": function () {
                    const sessionTicket = window.sessionStorage.getItem("sessionTicket")
                    if (sessionTicket) {
                        return sessionTicket
                    }
                    return null
                }
            }
        )

        Session.config(
            function (ticket) {
                if (!ticket) {
                    window.sessionStorage.removeItem("sessionTicket");
                } else {
                    window.sessionStorage.setItem("sessionTicket", ticket)
                }
            },
            function () {
                const sessionTicket = window.sessionStorage.getItem('sessionTicket')
                return sessionTicket != null
            }
        )
    }

    return {
        set: set,
    }
}()

export default Config