// import { EmailTemplate } from '../../../componentes/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Matheus <matheusbicegodata@gmail.com>',
            to: ['matheusbicegodata@gmail.com'],
            subject: 'Hello World',
            react: ( 
            <>
                <p>Email Body</p>
            </>
            ),
        });
        
        return NextResponse,json(data);
    }   catch (error) {
        return NextResponse.json({ error });
    }
}