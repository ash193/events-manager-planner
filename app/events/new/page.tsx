import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function NewEventPage() {
  return (
    <div className="mx-auth w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form>
            <FormField>
              <Label>Title</Label>
              <Input id="title" name="title" required />
            </FormField>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
