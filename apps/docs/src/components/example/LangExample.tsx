"use client";

import { Card, Label } from "../ui";

export const LangExample: React.FC = () => {
  return (
    <form>
      <Card>
        <Card.Body className="space-y-4">
          <div>
            <Label>First Name</Label>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
