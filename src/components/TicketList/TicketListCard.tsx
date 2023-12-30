import { useRouter } from 'next/navigation'
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { ITicket, ticketStatusLabels } from '@/tsModels/ticket.models';
import { deleteTicket } from '@/components/TicketList/request';

interface ITicketListCardProps {
  ticket: ITicket;
  isAdmin: boolean;
  loadTickets: () => void;
}

const TicketListCard = ({ ticket, isAdmin, loadTickets }: ITicketListCardProps) => {
  const router = useRouter()

  const onEdit = () => {
    router.push(`/admin/${ticket._id}`)
  }

  const onDelete = async () => {
    try {
      await deleteTicket(ticket._id);

      await loadTickets();
    } catch (error) {
      console.log(error);
    }
  }

  const action = isAdmin ? (
    <>
      <IconButton onClick={onEdit}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onDelete}>
        <CloseIcon />
      </IconButton>
    </>
  ) : null;

  return (
    <Card
      key={ticket._id}
      className="p-6 mt-6"
    >
      <CardHeader
        title={`Name: ${ticket.name}`}
        subheader={`Status: ${ticketStatusLabels[ticket.status]}`}
        action={action}
      />
      <CardContent>
        <Divider>
          <Chip label="User email" />
        </Divider>
        <Typography paragraph>
          {ticket.email}
        </Typography>
        <Divider>
          <Chip label="Description" />
        </Divider>
        <Typography paragraph>
          {ticket.description}
        </Typography>
        <Divider>
          <Chip label="Answer" />
        </Divider>
        <Typography paragraph>
          {ticket.answer || 'No answer yet'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketListCard;
