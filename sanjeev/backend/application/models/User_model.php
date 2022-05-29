<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model
{
    function insertUserData($userdata)
    {
		$insert=$this->db->insert('user',$userdata);
		return $this->db->insert_id();
    }  
	
	public function checkuser($email,$password)
	{
	  $this->db->select('*');
	  $this->db->from('user');
	  $this->db->where('email',$email);
	  $this->db->where('password',$password);
	  $this->db->where('is_deleted',1);

	  $query=$this->db->get();
	  return $query->result_array();
	}
	public function tododata($tododata)
    {
		$insert=$this->db->insert('todolist',$tododata);
		return $this->db->insert_id();
    } 
	public function usertodolist()
	{
		$this->db->select('*');
		$this->db->from("todolist");
		// $this->db->where('userid',$userid);
		$this->db->where('is_deleted',1);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function tododetail($todoid)
	{
		$this->db->select('*');
		$this->db->from("todolist");
		$this->db->where('todoid',$todoid);
		// $this->db->where('userid',$userid);
		$this->db->where('is_deleted',1);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function deletetodo($data=array())
	{
	  $this->db->where('todoid',$data['todoid']);
	  $this->db->update("todolist",$data);
	  return true;
	}	
}