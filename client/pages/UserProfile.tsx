import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Building2, CreditCard, FileSignature } from "lucide-react";

export default function UserProfile() {
  const userInfo = {
    firstName: "another me",
    lastName: "member",
    occupation: "occupation",
    memberNo: "July_0003",
    branch: "Friday July 11",
    email: "another@email.com",
    mobile: "+2348030960928",
    gender: "Male",
    city: "Ogun",
    state: "Lagos",
    zip: "110242",
    accountNumber: "",
    accountName: "",
    bankName: "",
    address: "7 gbokoniyi drive, Abeokuta",
    creditSource: "null"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-20 h-20 border-4 border-brand-500">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-brand-100 text-brand-700 text-xl font-semibold">
                  {userInfo.firstName.charAt(0).toUpperCase()}{userInfo.lastName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-semibold text-brand-500 mb-2">
                  {userInfo.firstName} {userInfo.lastName}
                </h1>
                <p className="text-gray-600 mb-3">{userInfo.occupation}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-brand-50 text-brand-600 border-brand-200">
                    {userInfo.memberNo}
                  </Badge>
                  <Badge variant="outline" className="bg-brand-50 text-brand-600 border-brand-200">
                    {userInfo.branch}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-brand-500" />
                <h2 className="text-lg font-medium text-brand-500">Contact Information</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="text-gray-900">{userInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="text-gray-900">{userInfo.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900">{userInfo.address}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    <p className="text-gray-900">{userInfo.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">State</p>
                    <p className="text-gray-900">{userInfo.state}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Zip Code</p>
                    <p className="text-gray-900">{userInfo.zip}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banking Information */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-brand-500" />
                <h2 className="text-lg font-medium text-brand-500">Banking Information</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-gray-900">{userInfo.accountNumber || "—"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-1"></div>
                  <div>
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="text-gray-900">{userInfo.accountName || "—"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="text-gray-900">{userInfo.bankName || "—"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-1"></div>
                  <div>
                    <p className="text-sm text-gray-500">Credit Source</p>
                    <p className="text-gray-900">{userInfo.creditSource}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Digital Signature */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileSignature className="w-5 h-5 text-brand-500" />
              <h2 className="text-lg font-medium text-brand-500">Digital Signature</h2>
            </div>
            
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
                <div className="text-3xl font-signature text-gray-800 mb-4" style={{ fontFamily: 'cursive' }}>
                  another me
                </div>
                <p className="text-sm text-gray-500">
                  Authorized signature for {userInfo.firstName} {userInfo.lastName}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
