"use client";

import { Card, Input, Label } from "@/components/ui";

export const EmailCustomType: React.FC = () => {
  return (
    <form>
      <Card>
        <Card.Body className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input />
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
