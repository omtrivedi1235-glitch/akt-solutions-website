import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, subject, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const fullName = `${firstName} ${lastName}`
    const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@aktsolutionsllc.com"

    if (!web3FormsAccessKey) {
      console.error("[contact] WEB3FORMS_ACCESS_KEY is not set")
      return NextResponse.json(
        { error: "Email service is not configured. Please set WEB3FORMS_ACCESS_KEY." },
        { status: 500 }
      )
    }

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3FormsAccessKey,
        to: toEmail,
        from_name: "AKT Solutions Website",
        subject: subject || `New Inquiry from ${fullName}`,
        name: fullName,
        email,
        phone: phone || undefined,
        company: company || undefined,
        message,
        replyto: email,
      }),
    })

    const rawResponse = await web3FormsResponse.text()
    let result: { success?: boolean; message?: string } = {}

    try {
      result = JSON.parse(rawResponse)
    } catch {
      console.error("Web3Forms non-JSON response:", rawResponse)
      return NextResponse.json(
        { error: "Email provider returned an unexpected response. Please try again in a moment." },
        { status: 502 }
      )
    }

    if (!web3FormsResponse.ok || !result.success) {
      console.error("Web3Forms error:", result)
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
