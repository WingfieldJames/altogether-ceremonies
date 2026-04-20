import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, ceremonyType, preferredDate, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Connect an email service here (e.g. Resend, Nodemailer, SendGrid).
    // Example with Resend:
    //
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'website@altogetherceremonies.co.uk',
    //     to: 'jane@altogetherceremonies.co.uk',
    //     subject: `New enquiry from ${name}`,
    //     text: `
    //       Name: ${name}
    //       Email: ${email}
    //       Phone: ${phone || 'Not provided'}
    //       Ceremony type: ${ceremonyType || 'Not specified'}
    //       Preferred date: ${preferredDate || 'Not specified'}
    //       Message: ${message}
    //     `,
    //   });

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      ceremonyType,
      preferredDate,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
