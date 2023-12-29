import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ITicket } from '@/tsModels/ticket.models';
import { deleteTicket } from '@/components/TicketList/request';

interface ITicketListCardProps {
  ticket: ITicket;
  isAdmin: boolean;
  loadTickets: () => void;
}

const TicketListCard = ({ ticket, isAdmin, loadTickets }: ITicketListCardProps) => {
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
      <IconButton>
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
        title={ticket.name}
        subheader={ticket.status}
        action={action}
      />

      <CardContent>
        <Typography paragraph>
          {ticket.email}
        </Typography>
        <Typography paragraph>
          {ticket.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketListCard;
