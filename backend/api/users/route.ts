import { NextResponse } from 'next/server'
import dbConnect from '@/app/lib/mongoose'
import User from '@/app/models/User'

export async function GET() {
  try {
    await dbConnect()
    const users = await User.find({}, { password: 0 }).lean()
    return NextResponse.json({ users }, { status: 200 })
  } catch (e) {
    console.error('Users GET error:', e)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
